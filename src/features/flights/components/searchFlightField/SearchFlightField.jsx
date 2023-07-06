import React from 'react';
import './search-field.scss';

const SearchFlightField = () => {

  return (
    <div className="search-action">
      <h1 className="search-action__title">Search flight</h1>
      <form className="search-action__form">
        <i className="fas fa-search"></i>
        <input
          className="search-action__input"
          role="textbox"
          type="text"
          placeholder="Airline, destination or flight #"
        />
        <button className="search-action__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFlightField;
