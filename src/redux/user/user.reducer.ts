import { UserActionTypes } from './user.types';
import { UserState } from './user.actions';
import { Action } from './user.types';

interface IStateCheck {
  currentUser: UserState;
}

const INITIAL_STATE: IStateCheck = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action: Action) => {
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
