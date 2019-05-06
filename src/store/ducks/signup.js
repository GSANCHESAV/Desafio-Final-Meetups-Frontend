import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signUpRequest: ['username', 'email', 'password', 'password_confirmation'],
  signUpSuccess: ['username'],
});

export const SignupTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  username: '',
});

/* Reducers */

export const success = (state, { username }) => state.merge({ username });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_SUCCESS]: success,
});
