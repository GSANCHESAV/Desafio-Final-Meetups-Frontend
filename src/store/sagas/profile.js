/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import ProfileActions from '../ducks/profile';

export function* profileEdit({
  username,
  password,
  password_confirmation,
  frontend,
  backend,
  mobile,
  devops,
  gestao,
  marketing,
}) {
  try {
    yield call(api.put, 'preferences', {
      frontend,
      backend,
      mobile,
      devops,
      gestao,
      marketing,
    });

    yield call(api.put, 'users', {
      username,
      password,
      password_confirmation,
    });

    yield put(ProfileActions.profileEditSuccess());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Perfil editado com Sucesso!',
        message: 'As informações já foram atualizadas.',
        options: {
          timeOut: 5000,
          progressBar: true,
          closeOnToastrClick: true,
          showCloseButton: true,
        },
      }),
    );

    yield put(push('/dashboard'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha edição do perfil',
        message: 'Tente novamente.',
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
