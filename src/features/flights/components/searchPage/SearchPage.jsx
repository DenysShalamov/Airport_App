import React from 'react';
import Header from '../header/Header';
import SearchFlightField from '../searchFlightField/SearchFlightField';
import './search-page.scss';

const SearchPage = () => {
  return (
    <>
      <Header />
      <main className="search-page">
      <SearchFlightField />
      </main>
    </>
  );
};

export default SearchPage;
