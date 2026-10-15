import { MovieAction, MovieConfig } from '../types/MovieType';

export const movieReducer = (
  state: MovieConfig[],
  action: MovieAction,
): MovieConfig[] => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return state.filter((movie) =>
        movie.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
    case 'TOGGLE_MOVIE':
      return state.map((movie) =>
        movie.id === action.payload
          ? { ...movie, watched: !movie.watched }
          : movie,
      );
    default:
      return state;
  }
};
