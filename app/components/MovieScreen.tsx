import MovieInput from './MovieInput';
import MoiveList from './MovieList';
import MovieProvider from './context/MovieProvider';

export default function MovieScreen() {
  return (
    <MovieProvider>
      <div>
        <MovieInput />
        <MoiveList />
      </div>
    </MovieProvider>
  );
}
