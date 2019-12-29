import { SIGN_IN, SIGN_OUT } from "./types";
import movies from "../apis/movies";
export const fetchMovies = () => async dispatch => {
  const response = await fetch("/api/movies");
  const body = await response.json();
  console.log(body.results);
  dispatch({ type: "FETCH_MOVIES", payload: body.results });
};

// getMovies = async () => {
//     if (response.status !== 200) throw Error(body.message);
//     console.log(body);
//     return body;
//   };

// export const bookTickets = (movieId, updatedSeats) => {
//   // const response = await fetch(`/api/movies/${movieId}`, {
//   //   method: 'PUT',
//   //   headers: {
//   //     'Content-Type': 'application/json'
//   //     // 'Content-Type': 'application/x-www-form-urlencoded',
//   //   },
//   //   body: JSON.stringify(updatedSeats)
//   // });
//   // const body = await response.json();
//   // dispatch({ type: 'BOOK_SEATS', payload: { movieId, updatedSeats } });
//   return {
//     type: "BOOK_SEATS",
//     payload: {
//       movieId,
//       updatedSeats
//     }
//   };
// };

export const bookTickets = (movieId, updatedSeats) => async (
  dispatch,
  getState
) => {
  const { userId } = getState().auth;
  const response = await movies.put(`/movies/${movieId}`, {
    userId,
    updatedSeats
  });
  dispatch({ type: "BOOK_SEATS", payload: response.data });
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
