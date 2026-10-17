'use client';
import { useMovies } from './hooks/useMovies';
export default function Watched() {
  const { movie } = useMovies();
  const watchedMovies = movie.movies.filter((movie) => movie.watched);
  return (
    <div>
      {watchedMovies.length > 0 ? (
        watchedMovies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <h3>{movie.description}</h3>
            <p>{movie.released_date}</p>
          </div>
        ))
      ) : (
        <h2>Try Watching Some Movies :)</h2>
      )}
    </div>
  );
}
