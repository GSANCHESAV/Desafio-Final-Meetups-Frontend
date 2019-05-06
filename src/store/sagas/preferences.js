/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import PreferencesActions from '../ducks/preferences';

export function* preferencesCreate({
  frontend, backend, mobile, devops, gestao, marketing,
}) {
  try {
    const response = yield call(api.post, 'preferences', {
      frontend,
      backend,
      mobile,
      devops,
      gestao,
      marketing,
    });

    yield put(PreferencesActions.preferencesCreateSuccess(response.data));

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Preferências Definidas!',
        message: 'Agora é só ficar ligado para não perder nenhum Meetup.',
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
        title: 'Falha na definição das Preferências',
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
