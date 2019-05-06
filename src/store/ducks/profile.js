import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  profileEditRequest: [
    'username',
    'password',
    'password_confirmation',
    'frontend',
    'backend',
    'mobile',
    'devops',
    'gestao',
    'marketing',
  ],
  profileEditSuccess: '',
});

export const ProfileTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
});

/* Reducers */

export const success = state => state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PROFILE_EDIT_SUCCESS]: success,
});
