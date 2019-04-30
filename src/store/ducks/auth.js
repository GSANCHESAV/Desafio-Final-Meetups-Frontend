import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  // signUpRequest: ['username', 'email', 'password', 'password_confirmation'],
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@Meetups:token'),
  token: localStorage.getItem('@Meetups:token') || null,
});

/* Reducers */

// export const signUpSuccess,

export const success = (state, { token }) => state.merge({ signedIn: true, token });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  // [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_IN_SUCCESS]: success,
});
