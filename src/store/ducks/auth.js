import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signOut: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@Meetups:token'),
  token: localStorage.getItem('@Meetups:token') || null,
  user: localStorage.getItem('@Meetups:user') || null,
});

/* Reducers */

export const success = (state, { token }) => state.merge({ token, signedIn: true });

export const logout = state => state.merge({ token: null, signedIn: false });
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
});
