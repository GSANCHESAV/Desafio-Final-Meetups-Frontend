import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import Dashboard from '../pages/Dashboard';
import Preferences from '../pages/Preferences';
import Search from '../pages/Search';
import Details from '../pages/Details';
import NewMeetup from '../pages/NewMeetup';
import Profile from '../pages/Profile';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signup" component={SignUp} />
      <Guest path="/signin" component={SignIn} />
      <Private path="/preferences" component={Preferences} />
      <Private path="/dashboard" component={Dashboard} />
      <Private path="/search" component={Search} />
      <Private path="/details/:id" component={Details} />
      <Private path="/new-meetup" component={NewMeetup} />
      <Private path="/profile" component={Profile} />
      <Guest path="*" component={SignIn} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
