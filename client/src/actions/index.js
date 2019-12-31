import { SIGN_IN, SIGN_OUT } from './types';
import movies from '../apis/movies';
export const fetchMovies = () => async dispatch => {
  const response = await fetch('/api/movies');
  const body = await response.json();
  console.log(body.results);
  dispatch({ type: 'FETCH_MOVIES', payload: body.results });
};

export const bookTickets = (movieId, updatedSeats) => async (
  dispatch,
  getState
) => {
  const { userId } = getState().auth;
  console.log(userId);
  const response = await movies.put(`/movies/${movieId}`, {
    seats: updatedSeats
  });

  dispatch({ type: 'BOOK_SEATS', payload: { movieId, updatedSeats } });
};

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
