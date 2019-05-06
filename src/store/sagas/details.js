import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import api from '../../services/api';

import DetailsActions from '../ducks/details';

export function* getMeetup({ id }) {
  const response = yield call(api.get, `/meetups/${id}`);

  yield put(DetailsActions.getMeetupSuccess(response.data));
}
