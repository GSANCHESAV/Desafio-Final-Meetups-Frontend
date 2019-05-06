import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  preferencesCreateRequest: ['frontend', 'backend', 'mobile', 'devops', 'gestao', 'marketing'],
  preferencesCreateSuccess: '',
});

export const PreferencesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  user: localStorage.getItem('@Meetups:user') || null,
});

/* Reducers */

export const success = (state, { user }) => state.merge({ state, user });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PREFERENCES_CREATE_SUCCESS]: success,
});
