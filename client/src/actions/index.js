export const fetchMovies = () => async dispatch => {
  const response = await fetch('/api/movies');
  const body = await response.json();
  console.log(body.results);
  dispatch({ type: 'FETCH_MOVIES', payload: body.results });
};

// getMovies = async () => {
//     if (response.status !== 200) throw Error(body.message);
//     console.log(body);
//     return body;
//   };

export const bookTickets = ({ movieId, updatedSeats }) => async dispatch => {
  const response = await fetch(`/api/movies/${movieId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(updatedSeats)
  });
  const body = await response.json();
  dispatch({ type: 'BOOK_SEATS', payload: { movieId, updatedSeats } });
};
