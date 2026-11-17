'use client';
import { useState } from 'react';
import Form from './Form';
import { FormConfig } from './types/FormType';
import { useMovies } from './hooks/useMovies';
import { movieFields } from './movieFields';
export default function AddMovies() {
  const { dispatch } = useMovies();
  const [userInput, setUserInput] = useState({
    title: '',
    description: '',
  });
  const hanldeUserInput = (key: string, text: string) => {
    setUserInput((prev) => ({ ...prev, [key]: text }));
  };
  const handleSubmit = () => {
    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        id: Date.now(),
        title: userInput.title,
        description: userInput.description,
        released_date: new Date().toISOString(),
        watched: false,
      },
    });
  };
  return (
    <div>
      <Form
        fields={movieFields}
        value={userInput}
        onChange={hanldeUserInput}
        name="userInput"
        onSubmit={handleSubmit}
        buttonText="Add"
      />
    </div>
  );
}
