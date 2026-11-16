'use client';
import { useMemo } from 'react';
import Button from './Button';
import { useMovies } from './hooks/useMovies';
export default function MovieList({ darkMode }: { darkMode: boolean }) {
  const { movie, dispatch } = useMovies();
  const filteredMovies = useMemo(() => {
    return movie.movies.filter((item) =>
      item.title.toLowerCase().includes(movie.searchQuery.toLowerCase()),
    );
  }, [movie.movies, movie.searchQuery]);

  return (
    <div
      className={
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'
      }
    >
      {filteredMovies.length > 0 ? (
        filteredMovies.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <p>{item.released_date}</p>
            <Button
              onClick={() =>
                dispatch({ type: 'TOGGLE_MOVIE', payload: item.id })
              }
            >
              {item.watched ? 'Watched' : 'Not watched'}
            </Button>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
