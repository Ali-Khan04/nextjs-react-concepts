'use client';
/*
  PERSISTING MOVIES ACROSS RELOADS (localStorage)

  PROBLEM: useReducer state is in memory only. A full page load (refresh,
  typing the URL) resets it to `movieData`. Navigating with next/link does
  NOT reset it, because the layout/provider stay mounted.

  HOW IT WORKS:
  - Effect 1 (runs once on mount): read 'movies' from localStorage. If
    something is saved, dispatch LOAD to replace state.movies with it.
    Then flip checkLocalStorage to true meaning "I've finished checking".
  - Effect 2 (runs when movie.movies changes): save the movies back to
    localStorage, but only after checkLocalStorage is true.
  - localStorage only stores strings: JSON.stringify to save, JSON.parse to
    read. getItem returns null if nothing is saved yet.
  - LOAD is just an action name I picked. Payload = the full movie array.

  WHY useEffect AND NOT THE useReducer INITIALIZER:
  - Next.js renders on the server first, where localStorage doesn't exist.
    Reading it in the first client render makes different HTML than the
    server sent -> hydration mismatch error. Effects run only in the browser.

  WHY THE checkLocalStorage FLAG:
  - Without it, effect 2 would run on first render and overwrite the saved
    data with the defaults (a real bug in dev, StrictMode runs effects twice).

  LIMITS:
  - LOAD replaces the whole movies array, so if I later edit movieData
    (add a movie, change a description), existing users keep seeing their
    old saved copy. Fix: save only the watched ids and merge onto movieData.
  - Per browser/device only. No sync, no real DB.
*/
import { useReducer, useState, useEffect } from 'react';
import { MovieState } from '../types/MovieType';
import { movieReducer } from './movieReducer';
import { movieData } from '../data/moviesData';
import { MovieContext } from './MovieContext';

const initialState: MovieState = { movies: movieData, searchQuery: '' };
export default function MovieProvider({ children }: React.PropsWithChildren) {
  const [movie, dispatch] = useReducer(movieReducer, initialState);
  const [checkLocalStorage, setCheckLocalStorage] = useState<boolean>(false);
  useEffect(() => {
    const saved = localStorage.getItem('movies');
    if (saved) dispatch({ type: 'LOAD', payload: JSON.parse(saved) });
    setCheckLocalStorage(true);
  }, []);
  useEffect(() => {
    if (checkLocalStorage)
      localStorage.setItem('movies', JSON.stringify(movie.movies));
  }, [movie.movies]);
  return (
    <MovieContext.Provider value={{ movie, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
