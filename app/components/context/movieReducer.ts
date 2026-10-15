import { MovieAction, MovieState } from '../types/MovieType';

export const movieReducer = (
  state: MovieState,
  action: MovieAction,
): MovieState => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return { ...state, searchQuery: action.payload };
    case 'TOGGLE_MOVIE':
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, watched: !movie.watched }
            : movie,
        ),
      };
    default:
      return state;
  }
};
