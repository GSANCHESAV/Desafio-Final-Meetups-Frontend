/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '../../services/api';

import MeetupsActions from '../ducks/meetups';

export function* getMeetups() {
  const response = yield call(api.get, 'meetups');

  yield put(MeetupsActions.getMeetupsSuccess(response.data));
}

export function* meetupCreate({
  title, description, place, image, category,
}) {
  try {
    const imageFile = image[0];

    const data = new FormData();
    data.append('file', imageFile);

    const responseImage = yield call(api.post, '/files', data);

    const cover_url = responseImage.data.url;

    yield call(api.post, 'meetups', {
      title,
      description,
      place,
      cover_url,
      category,
    });

    yield put(MeetupsActions.meetupCreateSuccess());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Meetup Criado com Sucesso!',
        message: 'Divulgue bem seu meetup e garanta um evento de sucesso.',
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
        title: 'Falha na criação do Meetup',
        message: 'Verifique sua conexão e tente novamente.',
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
