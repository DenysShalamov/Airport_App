import React from 'react';

import './date-picker.scss';

const DatePicker = () => {

  return (
    <div className="flightboard__calendar">
      <div className="flightboard__calendar-date">
        <label htmlFor="search-date">search date</label>
        <div className="calendar-ico" id="search-date">
          <i className="fas fa-calendar-days"></i>
          <form className="event-form">
            <input
              role="textbox"
              type="date"
              className="flightboard__calendar-input"
              name="calendar"
            />
          </form>
        </div>
      </div>
      <div className="three-days">
        <div
          aria-label="choose yesterday date schedule"
          role="generic"
          className=""
        >
          <div className="date__num">prev day</div>
          <div className="date__title">Yesterday</div>
        </div>
        <div
          aria-label="choose today schedule"
          role="generic"
          className=""
        >
          <div className="date__num">cur day</div>
          <div className="date__title">Today</div>
        </div>
        <div
          aria-label="choose tomorrow schedule"
          role="generic"
          className=""
        >
          <div className="date__num">nextDay</div>
          <div className="date__title">Tomorrow</div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
