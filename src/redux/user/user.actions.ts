import { UserActionTypes } from './user.types';

// interface Entity {
//   id: string;
// }
// export interface IUserState {
//   user?: firebase.User | Entity;
// }
export type DocumentData = { [field: string]: any };

export interface SetCurUserAction {
  type: UserActionTypes.setCurrentUser;
  payload: DocumentData;
}

export const setCurrentUser = (user: DocumentData) => ({
  type: UserActionTypes.setCurrentUser,
  payload: user
});
