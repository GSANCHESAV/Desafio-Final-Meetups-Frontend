import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

// eslint-disable-next-line import/no-cycle
import api from '../../services/api';

import RegisterActions from '../ducks/register';

export function* getRegisters() {
  const response = yield call(api.get, 'registered');

  yield put(RegisterActions.getRegistersSuccess(response.data));
}

export function* registerMeetup({ id }) {
  try {
    const verification = yield call(api.post, `/meetups/${id}/registration`);

    if (verification.data !== false) {
      yield put(
        toastrActions.add({
          type: 'success',
          title: 'Inscrição realizada!',
          message: 'Fique ligado para não perder o evento.',
          options: {
            timeOut: 1000,
          },
        }),
      );
    } else {
      const modification = yield call(api.put, `/meetups/${id}/registration`);

      yield put(RegisterActions.registerSuccess());

      if (modification.data === true) {
        yield put(
          toastrActions.add({
            type: 'success',
            title: 'Inscrição realizada!',
            message: 'Fique ligado para não perder o evento.',
            options: {
              timeOut: 1000,
            },
          }),
        );
      } else {
        yield put(
          toastrActions.add({
            type: 'info',
            title: 'Inscrição desfeita!',
            message: 'Você não está mais inscrito para esse meetup.',
            options: {
              timeOut: 1000,
            },
          }),
        );
      }
    }
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Error',
        message: 'Tente novamente mais tarde.',
        options: {
          timeOut: 2000,
        },
      }),
    );
  }
}
