import { useState } from 'react';
import Form from './Form';
import { movieFields } from './movieFields';
import { MovieConfig } from './types/MovieType';
import { useMovies } from './hooks/useMovies';
import Button from './Button';

type EditMoviesProps = {
  movie: MovieConfig;
  onClose: () => void;
};

export default function EditMovies({ movie, onClose }: EditMoviesProps) {
  const { dispatch } = useMovies();

  const [userInput, setUserInput] = useState({
    title: movie.title,
    description: movie.description,
  });

  const handleUserInput = (key: string, text: string) => {
    setUserInput((prev) => ({ ...prev, [key]: text }));
  };

  const handleSubmit = () => {
    dispatch({
      type: 'EDIT_MOVIE',
      payload: {
        ...movie,
        ...userInput,
      },
    });

    onClose();
  };
  return (
    <div>
      <h2>Editing: {movie.title}</h2>

      <Form
        fields={movieFields}
        value={userInput}
        onChange={handleUserInput}
        name="userInput"
        onSubmit={handleSubmit}
        buttonText="Update Movie"
      />
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </div>
  );
}

/*export default function EditMovies({ movie }: EditMoviesProps) {
  return (
    <div className="bg-red-500 p-5 text-white">
      <h1>EDITING MOVIE</h1>
      <p>{movie.title}</p>
    </div>
  );
}
*/
