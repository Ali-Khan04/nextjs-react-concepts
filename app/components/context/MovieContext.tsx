'use client';
import { createContext } from 'react';
import { MovieContextType } from '../types/MovieType';

export const MovieContext = createContext<MovieContextType | undefined>(
  undefined,
);
