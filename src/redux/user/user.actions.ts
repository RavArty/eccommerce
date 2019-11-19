import { UserActionTypes } from './user.types';

interface Entity {
  id?: string;
  [field: string]: any;
}
// export interface IUserState {
//   currentUser: Entity | null;
// }
export type UserState = Entity | null;
//type DocumentData = { [field: string]: any };
// export type UserType = DocumentData | null;

export interface SetCurUserAction {
  type: UserActionTypes.setCurrentUser;
  payload: UserState;
}

export const setCurrentUser = (user: UserState) => ({
  type: UserActionTypes.setCurrentUser,
  payload: user
});
