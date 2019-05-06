/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/Search';
import MeetupsLists from '../../components/MeetupsLists';
import { Container } from './styles';

const Search = () => (
  <Container>
    <Header />
    <SearchBar />
    <MeetupsLists />
  </Container>
);

export default Search;
