export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return action.payload;
    case 'BOOK_SEATS':
      console.log(state);
      const movie = state.find(movie => movie.id === action.payload.movieId);
      movie.seats = action.payload.seats;
      return { ...state, movie };
    default:
      return state;
  }
};
