/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import SignupActions from '../ducks/signup';

export function* signUp({
  username, email, password, password_confirmation,
}) {
  try {
    const response = yield call(api.post, 'users', {
      username,
      email,
      password,
      password_confirmation,
    });

    yield put(SignupActions.signUpSuccess(response.data.username));

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Registro confirmado!',
        message: 'Borá fazer Login?',
        options: {
          timeOut: 5000,
          progressBar: true,
          closeOnToastrClick: true,
          showCloseButton: true,
        },
      }),
    );

    yield put(push('/signin'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no Registro',
        message: 'Verifique se seu e-mail e senha estão corretos.',
        options: {
          timeOut: 5000,
          progressBar: true,
          closeOnToastrClick: true,
          showCloseButton: true,
        },
      }),
    );
  }
}
