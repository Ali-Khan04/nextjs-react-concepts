'use client';

import Button from './Button';
import { useMovies } from './hooks/useMovies';
export default function MovieList() {
  const { movie, dispatch } = useMovies();

  const filteredMovies = movie.movies.filter((item) =>
    item.title.toLowerCase().includes(movie.searchQuery.toLowerCase()),
  );

  return (
    <div>
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
