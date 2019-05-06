/* eslint-disable import/no-cycle */
import { all, takeLatest } from 'redux-saga/effects';

import { signUp } from './signup';
import { SignupTypes } from '../ducks/signup';

import { signIn, signOut } from './auth';
import { AuthTypes } from '../ducks/auth';

import { preferencesCreate } from './preferences';
import { PreferencesTypes } from '../ducks/preferences';

import { profileEdit } from './profile';
import { ProfileTypes } from '../ducks/profile';

import { getMeetups, meetupCreate } from './meetups';
import { MeetupsTypes } from '../ducks/meetups';

import { getMeetup } from './details';
import { DetailsTypes } from '../ducks/details';

import { getRegisters, registerMeetup } from './register';
import { RegisterTypes } from '../ducks/register';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(SignupTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(PreferencesTypes.PREFERENCES_CREATE_REQUEST, preferencesCreate),
    takeLatest(ProfileTypes.PROFILE_EDIT_REQUEST, profileEdit),
    takeLatest(MeetupsTypes.GET_MEETUPS_REQUEST, getMeetups),
    takeLatest(MeetupsTypes.MEETUP_CREATE_REQUEST, meetupCreate),
    takeLatest(DetailsTypes.GET_MEETUP_REQUEST, getMeetup),
    takeLatest(RegisterTypes.REGISTER_REQUEST, registerMeetup),
    takeLatest(RegisterTypes.GET_REGISTERS_REQUEST, getRegisters),
  ]);
}
