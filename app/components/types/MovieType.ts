import React from 'react';

export type MovieConfig = {
  id: number;
  title: string;
  description: string;
  released_date: number;
  watched: boolean;
};

export type MovieAction =
  | {
      type: 'SEARCH_MOVIE';
      payload: string;
    }
  | {
      type: 'TOGGLE_MOVIE';
      payload: number;
    };

export type MovieContextType = {
  movie: MovieConfig[];
  dispatch: React.Dispatch<MovieAction>;
};
