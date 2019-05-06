/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignupActions from '../../../store/ducks/signup';

import { Container, Box, Button } from '../styles';
import Logo from '../../../assets/images/logo.svg';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    error: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const {
      username, email, password, password_confirmation,
    } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(username, email, password, password_confirmation);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      username, email, password, password_confirmation, error,
    } = this.state;

    return (
      <Container>
        <Box>
          <img src={Logo} alt="Logo do App." />
          {error && <p>{error}</p>}
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <span>Nome</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              placeholder="Digite seu nome"
            />

            <span>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Digite seu e-mail"
            />

            <span>Senha</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              placeholder="Sua senha secreta"
            />

            <span>Confime sua senha</span>
            <input
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={this.handleInputChange}
              placeholder="Sua senha secreta"
            />

            <Button type="submit" value="submit">
              Criar conta
            </Button>
          </form>
          <Link to="/signin">Já tenho conta</Link>
        </Box>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
