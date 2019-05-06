import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import AuthActions from '../../store/ducks/auth';

import { Container } from './styles';
import LogoWhite from '../../assets/images/logo-white.svg';
import UserIcon from '../../assets/images/profile.svg';

class Header extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  };

  state = {};

  render() {
    const { signOut } = this.props;

    return (
      <Container>
        <div>
          <img src={LogoWhite} alt="Logo do App." />

          <div>
            <Link to="/dashboard">Início</Link>
            <Link to="/search">Buscar</Link>
            <Link to="/new-meetup">Novo meetup</Link>
          </div>
        </div>

        <div>
          <button type="button" onClick={signOut}>
            Sair
          </button>
          <Link to="/profile">
            <img src={UserIcon} className="profile" alt="Icone do usuário" />
          </Link>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...AuthActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
