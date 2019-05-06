import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as signup } from './signup';
import { reducer as preferences } from './preferences';
import { reducer as profile } from './profile';
import { reducer as meetups } from './meetups';
import { reducer as details } from './details';
import { reducer as register } from './register';

export default history => combineReducers({
  auth,
  signup,
  preferences,
  profile,
  meetups,
  details,
  register,
  toastr,
  router: connectRouter(history),
});
