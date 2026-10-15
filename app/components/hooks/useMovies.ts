'use client';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

export const useMovies = () => {
  const ctx = useContext(MovieContext);
  if (!ctx)
    throw new Error('Context Must be Defined! Try Wrapping the Provider');
  return ctx;
};
