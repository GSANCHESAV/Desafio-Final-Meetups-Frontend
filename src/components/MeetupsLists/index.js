/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import MeetupsActions from '../../store/ducks/meetups';
import RegisterActions from '../../store/ducks/register';

import MeetupCard from '../MeetupCard';
import { Container, Box, Title } from './styles';

class MeetupsLists extends Component {
  static propTypes = {
    getMeetupsRequest: PropTypes.func.isRequired,
    getRegistersRequest: PropTypes.func.isRequired,
    meetups: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      num_subs: PropTypes.number.isRequired,
    }).isRequired,
    registers: PropTypes.number.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { getMeetupsRequest, getRegistersRequest } = this.props;

    getMeetupsRequest();
    getRegistersRequest();
  }

  render() {
    const { meetups, registers } = this.props;

    return (
      <Container>
        <div>
          <Title>Inscrições</Title>
          <Box>
            {registers.length !== 0 ? (
              registers !== undefined ? (
                registers.map(props => <MeetupCard {...props} key={props.id} />)
              ) : (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <h4>Carregando...</h4>
                </div>
              )
            ) : (
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <p style={{ opacity: '0.5' }}>Nenhum meetup cadastrado.</p>
              </div>
            )}
          </Box>
        </div>

        <div>
          <Title>Proximos Meetups</Title>
          <Box>
            {meetups.data !== undefined ? (
              meetups.data.map(props => <MeetupCard {...props} key={props.id} />)
            ) : (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <h4>Carregando...</h4>
              </div>
            )}
          </Box>
        </div>

        <div>
          <Title>Recomendados</Title>

          <Box>
            {meetups.data !== undefined ? (
              meetups.data.map(props => <MeetupCard {...props} key={props.id} />)
            ) : (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <h4>Carregando...</h4>
              </div>
            )}
          </Box>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups.meetups,
  registers: state.register.registers,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...MeetupsActions, ...RegisterActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetupsLists);
