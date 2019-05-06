import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getMeetupsRequest: null,
  getMeetupsSuccess: ['meetups'],
  meetupCreateRequest: ['title', 'description', 'place', 'image', 'category'],
  meetupCreateSuccess: '',
});

export const MeetupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  meetups: [],
});

/* Reducers */

export const getSuccess = (state, { meetups }) => state.merge({ meetups });

export const success = state => state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MEETUPS_SUCCESS]: getSuccess,
  [Types.MEETUP_CREATE_SUCCESS]: success,
});
