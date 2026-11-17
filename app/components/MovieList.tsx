'use client';
import { useMemo, useState } from 'react';
import Button from './Button';
import { useMovies } from './hooks/useMovies';
import { MovieConfig } from './types/MovieType';
import EditMovies from './EditMovies';
export default function MovieList({ darkMode }: { darkMode: boolean }) {
  const { movie, dispatch } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<MovieConfig | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const filteredMovies = useMemo(() => {
    return movie.movies.filter((item) =>
      item.title.toLowerCase().includes(movie.searchQuery.toLowerCase()),
    );
  }, [movie.movies, movie.searchQuery]);
  const handleEdit = (movie: MovieConfig) => {
    setSelectedMovie(movie);
    setIsEditing(true);
    console.log('Selected movie:', movie);
  };
  console.log('Selected movie state:', selectedMovie);
  return (
    <div
      className={
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'
      }
    >
      {selectedMovie && isEditing && (
        <EditMovies movie={selectedMovie} onClose={() => setIsEditing(false)} />
      )}
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
            <Button
              onClick={() =>
                dispatch({ type: 'DELETE_MOVIE', payload: item.id })
              }
            >
              Delete
            </Button>
            <Button onClick={() => handleEdit(item)}>Edit</Button>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
