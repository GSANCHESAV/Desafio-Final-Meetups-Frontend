import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../../store/ducks/auth';

import { Container, Box, Button } from '../styles';
import Logo from '../../../assets/images/logo.svg';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Box>
          <img src={Logo} alt="Logo do App." />

          <form autoComplete="off" onSubmit={this.handleSubmit}>
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

            <Button type="submit" value="submit">
              Entrar
            </Button>
          </form>
          <Link to="/signup">Criar conta grátis</Link>
        </Box>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
