/* eslint-disable max-len */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaSearch } from 'react-icons/fa';
import MeetupsActions from '../../store/ducks/meetups';
import RegisterActions from '../../store/ducks/register';

import { Container, Search, ResultList } from './styles';

function searchingFor(term) {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class SearchBox extends Component {
  static propTypes = {
    getMeetupsRequest: PropTypes.func.isRequired,
    getRegistersRequest: PropTypes.func.isRequired,
    meetups: PropTypes.shape({}).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    const { getMeetupsRequest, getRegistersRequest } = this.props;

    getMeetupsRequest();
    getRegistersRequest();
  }

  valueMembers = (value) => {
    if (value === null) {
      return '0 membros';
    }

    if (value === 1) {
      return '1 membro';
    }

    return `${value} membros`;
  };

  handleSearch = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { meetups } = this.props;
    const { query } = this.state;

    return (
      <Container>
        <Search autoComplete="off">
          <FaSearch value={{ opacity: 0.3 }} />

          <input
            type="search"
            name="search"
            onChange={this.handleSearch}
            placeholder="Digite seu e-mail"
          />
        </Search>

        {query ? (
          <ResultList>
            {meetups.data !== undefined ? (
              meetups.data.filter(searchingFor(query)).map(meetup => (
                <Link key={meetup.id} to={`/details/${meetup.id}`}>
                  <div>
                    <div>
                      <img src={meetup.cover_url} alt={meetup.title} />
                      {meetup.title}
                    </div>
                    <p>{this.valueMembers(meetup.num_subs)}</p>
                  </div>
                </Link>
              ))
            ) : (
              <h4>Carregando...</h4>
            )}
          </ResultList>
        ) : null}
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
)(SearchBox);
