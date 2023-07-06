import React from 'react';
import Departure from '../../../../icons/Departure.svg';
import Arrivals from '../../../../icons/Arrivals.svg';
import './type-switchers.scss';

const TypeSwitchers = () => {
  return (
    <div className="type-switchers">
      <Departure className="type-switchers__link-icon" />
      <span className="type-switchers__link-text_dep">Departures</span>
      <Arrivals className="type-switchers__link-icon" />
      <span className="type-switchers__link-text">Arrivals</span>
    </div>
  );
};

export default TypeSwitchers;
