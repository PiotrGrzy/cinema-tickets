export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return action.payload;
    case 'BOOK_SEATS':
      const updatedState = state.map(item =>
        item._id === action.payload.movieId
          ? { ...item, seats: action.payload.updatedSeats }
          : item
      );
      return updatedState;
    default:
      return state;
  }
};
