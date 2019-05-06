/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaAngleRight } from 'react-icons/fa';
import {
  Card, TextBox, IconBox, CircleBox,
} from './styles';

class MeetupCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cover_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    num_subs: PropTypes.number.isRequired,

    register: PropTypes.shape({
      registered: PropTypes.number.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  valueMembers = () => {
    if (this.props.num_subs === null) {
      return '0 membros';
    }

    if (this.props.num_subs === 1) {
      return '1 membro';
    }

    return `${this.props.num_subs} membros`;
  };

  render() {
    const meetupUrl = `/details/${this.props.id}`;

    return (
      <Card image={this.props.cover_url}>
        <div>
          <TextBox>
            <h4>{this.props.title}</h4>
            <p>{this.valueMembers()}</p>
          </TextBox>
          <IconBox>
            <Link to={meetupUrl}>
              <CircleBox>
                <FaAngleRight />
              </CircleBox>
            </Link>
          </IconBox>
        </div>
      </Card>
    );
  }
}

export default MeetupCard;
