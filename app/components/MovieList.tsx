'use client';
import { movieData } from './data/moviesData';
import { useMovies } from './hooks/useMovies';

export default function MoiveList() {
  const { movie } = useMovies();
  return (
    <div>
      {movie.map((movies) => (
        <div key={movies.id}>
          <h1>{movies.title}</h1>
          <h3>{movies.description}</h3>
          <p>{movies.released_date}</p>
          <h5>{movies.watched}</h5>
        </div>
      ))}
    </div>
  );
}
