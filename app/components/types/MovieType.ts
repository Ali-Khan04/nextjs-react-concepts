import React from 'react';

export type MovieConfig = {
  id: number;
  title: string;
  description: string;
  released_date: string;
  watched: boolean;
};

export type MovieState = {
  movies: MovieConfig[];
  searchQuery: string;
};
export type MovieAction =
  | {
      type: 'SEARCH_MOVIE';
      payload: string;
    }
  | {
      type: 'TOGGLE_MOVIE';
      payload: number;
    }
  | { type: 'LOAD'; payload: MovieConfig[] }
  | {
      type: 'DELETE_MOVIE';
      payload: number;
    }
  | {
      type: 'ADD_MOVIE';
      payload: MovieConfig;
    }
  | {
      type: 'EDIT_MOVIE';
      payload: MovieConfig;
    };

export type MovieContextType = {
  movie: MovieState;
  dispatch: React.Dispatch<MovieAction>;
};
