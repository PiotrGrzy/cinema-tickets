import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        userEmail: action.payload.email,
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, userEmail: null };
    default:
      return state;
  }
};
