/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from '../../components/Header';
import MeetupsLists from '../../components/MeetupsLists';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <MeetupsLists />
      </div>
    );
  }
}

export default Dashboard;
