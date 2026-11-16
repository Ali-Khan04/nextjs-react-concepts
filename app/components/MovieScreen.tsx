'use client';

import MovieInput from './MovieInput';
import MovieList from './MovieList';
import { useState } from 'react';
import Button from './Button';

export default function MovieScreen() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <h1 className="text-2xl font-bold tracking-tight">🎬 Movie Library</h1>

        <Button
          onClick={handleDarkMode}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 ${
            darkMode
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
              : 'bg-gray-900 text-white hover:bg-gray-700'
          }`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">
        <MovieInput darkMode={darkMode} />
        <MovieList darkMode={darkMode} />
      </main>
    </div>
  );
}
