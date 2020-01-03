import { SIGN_IN, SIGN_OUT, FETCH_MOVIES, BOOK_SEATS } from './types';
import movies from '../apis/movies';

export const fetchMovies = () => async dispatch => {
  const response = await fetch('/api/movies');
  const body = await response.json();
  console.log(body.results);
  dispatch({ type: FETCH_MOVIES, payload: body.results });
};

export const bookTickets = (movieId, updatedSeats) => async (
  dispatch,
  getState
) => {
  const { userEmail } = getState().auth;
  console.log(userEmail);
  const response = await movies.put(`/movies/${movieId}`, {
    seats: updatedSeats,
  });
  if (response.status === 200) {
    alert(
      'Tickets were succesfully booked, we will send confirmation email on adress: ' +
        userEmail
    );
  }

  dispatch({
    type: BOOK_SEATS,
    payload: { movieId, updatedSeats },
  });
};

export const signIn = (userId, email) => {
  return {
    type: SIGN_IN,
    payload: {
      userId,
      email,
    },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
