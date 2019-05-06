/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import DetailsActions from '../../store/ducks/details';
import RegisterActions from '../../store/ducks/register';

import {
  Container, ImageBox, Wrapper, InfoBox, Button,
} from './styles';

class Details extends Component {
  static propTypes = {
    getMeetupRequest: PropTypes.func.isRequired,
    registerRequest: PropTypes.func.isRequired,
    meetup: PropTypes.shape({
      meetup: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        num_subs: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    register: PropTypes.shape({
      registered: PropTypes.number.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const { getMeetupRequest } = this.props;

    getMeetupRequest(id);
  }

  handleSubmit = () => {
    const { id } = this.props.match.params;
    const { registerRequest } = this.props;

    registerRequest(id);
  };

  valueMembers = () => {
    const { meetup } = this.props.meetup;

    if (meetup.num_subs === null) {
      return '0 membros';
    }

    if (meetup.num_subs === 1) {
      return '1 membro';
    }

    return `${meetup.num_subs} membros`;
  };

  render() {
    const { meetup } = this.props.meetup;

    return (
      <Container>
        <Header />

        <Wrapper>
          <ImageBox image={meetup.cover_url} />

          <InfoBox>
            <h2>{meetup.title}</h2>

            <h4>{this.valueMembers()}</h4>

            <p>{meetup.description}</p>

            <h4>Realizado em:</h4>
            <h5>{meetup.place}</h5>

            <Button type="submit" onClick={this.handleSubmit}>
              Inscreva-se
            </Button>
          </InfoBox>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.details,
  register: state.register,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...DetailsActions, ...RegisterActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
