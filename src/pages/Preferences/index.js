import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import PreferencesActions from '../../store/ducks/preferences';

import {
  Container, Box, Button, CheckBox,
} from './styles';

class Preferences extends Component {
  static propTypes = {
    preferencesCreateRequest: PropTypes.func.isRequired,
  };

  state = {
    frontend: '',
    backend: '',
    mobile: '',
    devops: '',
    gestao: '',
    marketing: '',
  };

  handlePreferences = async (e) => {
    e.preventDefault();

    const {
      frontend, backend, mobile, devops, gestao, marketing,
    } = this.state;

    const { preferencesCreateRequest } = this.props;

    preferencesCreateRequest(frontend, backend, mobile, devops, gestao, marketing);
  };

  handleInputChange = (e) => {
    const target = e.target || e.srcElement;
    this.setState({ [target.name]: target.checked });
  };

  render() {
    const {
      frontend, backend, mobile, devops, gestao, marketing,
    } = this.state;

    const user = JSON.parse(localStorage.getItem('@Meetups:user'));
    const welcome = `Olá ${user.username}`;

    return (
      <Container>
        <Box>
          <h2>{ welcome }</h2>
          <p>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas
            preferências para selecionarmos os melhores meetups pra você:
          </p>

          <h4>Preferências</h4>

          <form onSubmit={this.handlePreferences}>
            <div>
              <CheckBox
                type="checkbox"
                name="frontend"
                value={frontend}
                onChange={this.handleInputChange}
              />
              <span>Front-end</span>
            </div>

            <div>
              <CheckBox
                type="checkbox"
                name="backend"
                value={backend}
                onChange={this.handleInputChange}
              />
              <span>Back-end</span>
            </div>

            <div>
              <CheckBox
                type="checkbox"
                name="mobile"
                value={mobile}
                onChange={this.handleInputChange}
              />
              <span>Mobile</span>
            </div>

            <div>
              <CheckBox
                type="checkbox"
                name="devops"
                value={devops}
                onChange={this.handleInputChange}
              />
              <span>DevOps</span>
            </div>

            <div>
              <CheckBox
                type="checkbox"
                name="gestao"
                value={gestao}
                onChange={this.handleInputChange}
              />
              <span>Gestão</span>
            </div>

            <div>
              <CheckBox
                type="checkbox"
                name="marketing"
                value={marketing}
                onChange={this.handleInputChange}
              />
              <span>Marketing</span>
            </div>

            <Button type="submit" value="Submit">
              Continuar
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(PreferencesActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Preferences);
