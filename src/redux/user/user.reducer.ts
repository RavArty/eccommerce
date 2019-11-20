import { UserActionTypes } from './user.types';
import { UserState } from './user.actions';
import { UserAction } from './user.types';

interface IUserStateCheck {
  currentUser: UserState;
}

const INITIAL_STATE: IUserStateCheck = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
