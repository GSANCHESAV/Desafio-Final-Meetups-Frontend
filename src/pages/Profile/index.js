/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileActions from '../../store/ducks/profile';

import api from '../../services/api';

import Header from '../../components/Header';
import {
  Container, Box, Button, CheckBox, Preferences,
} from './styles';

class Profile extends Component {
  static propTypes = {
    profileEditRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
    password_confirmation: '',
    frontend: '',
    backend: '',
    mobile: '',
    devops: '',
    gestao: '',
    marketing: '',
  };

  async componentDidMount() {
    const response = await api.get('/preferences');
    const responseUser = await api.get('/users');

    this.setState({
      username: responseUser.data.username,
      frontend: response.data.frontend,
      backend: response.data.backend,
      mobile: response.data.mobile,
      devops: response.data.devops,
      gestao: response.data.gestao,
      marketing: response.data.marketing,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const {
      username,
      password,
      password_confirmation,
      frontend,
      backend,
      mobile,
      devops,
      gestao,
      marketing,
    } = this.state;

    const { profileEditRequest } = this.props;

    profileEditRequest(
      username,
      password,
      password_confirmation,
      frontend,
      backend,
      mobile,
      devops,
      gestao,
      marketing,
    );
  };

  handleInputChecked = (e) => {
    const target = e.target || e.srcElement;
    this.setState({ [target.name]: target.checked });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      username,
      password,
      password_confirmation,
      frontend,
      backend,
      mobile,
      devops,
      gestao,
      marketing,
    } = this.state;

    return (
      <Container>
        <Header />
        <Box>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Nome
              <input
                type="text"
                name="username"
                defaultValue={username}
                onChange={this.handleInputChange}
                placeholder="Digite seu nome"
              />
            </label>

            <label htmlFor="password">
              Senha
              <input type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="Sua senha secreta" />
            </label>

            <label htmlFor="password_confirmation">
              Confirmação de senha
              <input type="password" name="password_confirmation" value={password_confirmation} onChange={this.handleInputChange} placeholder="Sua senha secreta" />
            </label>

            <Preferences>
              <h4>Preferências</h4>
              <div>
                <CheckBox
                  type="checkbox"
                  name="frontend"
                  defaultValue={frontend}
                  checked={frontend}
                  onChange={this.handleInputChecked}
                />
                <span>Front-end</span>
              </div>

              <div>
                <CheckBox
                  type="checkbox"
                  name="backend"
                  defaultValue={backend}
                  checked={backend}
                  onChange={this.handleInputChecked}
                />
                <span>Back-end</span>
              </div>

              <div>
                <CheckBox
                  type="checkbox"
                  name="mobile"
                  defaultValue={mobile}
                  checked={mobile}
                  onChange={this.handleInputChecked}
                />
                <span>Mobile</span>
              </div>

              <div>
                <CheckBox
                  type="checkbox"
                  name="devops"
                  defaultValue={devops}
                  checked={devops}
                  onChange={this.handleInputChecked}
                />
                <span>DevOps</span>
              </div>

              <div>
                <CheckBox
                  type="checkbox"
                  name="gestao"
                  defaultValue={gestao}
                  checked={gestao}
                  onChange={this.handleInputChecked}
                />
                <span>Gestão</span>
              </div>

              <div>
                <CheckBox
                  type="checkbox"
                  name="marketing"
                  defaultValue={marketing}
                  checked={marketing}
                  onChange={this.handleInputChecked}
                />
                <span>Marketing</span>
              </div>
            </Preferences>

            <Button type="submit" value="Submit">
              Salvar
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProfileActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
