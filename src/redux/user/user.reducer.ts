import { UserActionTypes } from './user.types';
import { SetCurUserAction, DocumentData } from './user.actions';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (
  state: DocumentData = INITIAL_STATE,
  action: SetCurUserAction
) => {
  switch (action.type) {
    case UserActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
