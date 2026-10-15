'use client';
import { useState } from 'react';
import Form from './Form';
import { useMovies } from './hooks/useMovies';
import { FormConfig } from './types/FormType';

const fields: FormConfig[] = [
  {
    key: 'search',
    placeholder: 'Enter Movie Title',
  },
];
export default function MovieInput() {
  const { movie, dispatch } = useMovies();
  const [searchInput, setSearchInput] = useState({ search: '' });
  //const [searched, setSearched] = useState('');
  const handleInputChange = (key: string, userInput: string) => {
    setSearchInput((prev) => ({ ...prev, [key]: userInput }));
  };
  const handleSubmit = () => {
    dispatch({
      type: 'SEARCH_MOVIE',
      payload: searchInput.search,
    });
    console.log('Search: ', searchInput.search);
  };
  return (
    <Form
      fields={fields}
      value={searchInput}
      name="Search"
      onChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
}
