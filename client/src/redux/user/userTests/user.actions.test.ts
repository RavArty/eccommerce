import { UserActionTypes } from '../user.types';
import { setCurrentUser } from '../user.actions';

describe('setCurrentUser action', () => {
  it('should create the setCurrentUser action', () => {
    expect(setCurrentUser({}).type).toEqual(UserActionTypes.SET_CURRENT_USER);
  });
});
