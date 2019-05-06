/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    localStorage.setItem('@Meetups:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    const user = yield call(api.get, 'users');
    localStorage.setItem('@Meetups:user', JSON.stringify(user.data));

    if (user.data.first_access === true) {
      yield put(push('/preferences'));

      yield put(
        toastrActions.add({
          type: 'success',
          title: 'Bem-vindo!',
          message: 'Defina suas preferências de Meetup.',
          options: {
            timeOut: 5000,
            progressBar: true,
            closeOnToastrClick: true,
            showCloseButton: true,
          },
        }),
      );
    } else {
      yield put(push('/dashboard'));

      yield put(
        toastrActions.add({
          type: 'success',
          title: 'Bem-vindo!',
          message: 'Dê uma olhada nos novos Meetups.',
          options: {
            timeOut: 5000,
            progressBar: true,
            closeOnToastrClick: true,
            showCloseButton: true,
          },
        }),
      );
    }
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique se seu e-mail e senha estão corretos.',
        options: {
          timeOut: 3000,
          progressBar: true,
          closeOnToastrClick: true,
          showCloseButton: true,
        },
      }),
    );
  }
}

export function* signOut() {
  localStorage.removeItem('@Meetups:token');
  localStorage.removeItem('@Meetups:user');

  yield put(push('/signin'));
}
