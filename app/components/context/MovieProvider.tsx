'use client';
import { useReducer } from 'react';
import { MovieConfig } from '../types/MovieType';
import { movieReducer } from './movieReducer';
import { movieData } from '../data/moviesData';
import { MovieContext } from './MovieContext';

const initialState: MovieConfig[] = movieData;
export default function MovieProvider({ children }: React.PropsWithChildren) {
  const [movie, dispatch] = useReducer(movieReducer, initialState);
  return (
    <MovieContext.Provider value={{ movie, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
