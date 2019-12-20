export const fetchMovies = () => async dispatch => {
  const response = await fetch("/api/movies");
  const body = await response.json();
  dispatch({ type: "FETCH_MOVIES", payload: body.results });
};

// getMovies = async () => {
//     if (response.status !== 200) throw Error(body.message);
//     console.log(body);
//     return body;
//   };
