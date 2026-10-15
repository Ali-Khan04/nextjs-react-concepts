'use client';
import { useReducer } from 'react';
import { MovieState } from '../types/MovieType';
import { movieReducer } from './movieReducer';
import { movieData } from '../data/moviesData';
import { MovieContext } from './MovieContext';

const initialState: MovieState = { movies: movieData, searchQuery: '' };
export default function MovieProvider({ children }: React.PropsWithChildren) {
  const [movie, dispatch] = useReducer(movieReducer, initialState);
  return (
    <MovieContext.Provider value={{ movie, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
