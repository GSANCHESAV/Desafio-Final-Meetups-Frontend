import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  registerRequest: ['id'],
  registerSuccess: null,
  getRegistersRequest: null,
  getRegistersSuccess: ['registers'],
});

export const RegisterTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  registered: false,
  registers: [],
});

/* Reducers */

export const success = state => state.merge({ registered: !state.registered });

export const getSuccess = (state, { registers }) => state.merge({ registers });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_SUCCESS]: success,
  [Types.GET_REGISTERS_SUCCESS]: getSuccess,
});
