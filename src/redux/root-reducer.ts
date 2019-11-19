import { combineReducers, AnyAction } from 'redux';

import userReducer from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;
