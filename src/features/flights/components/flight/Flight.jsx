import React from 'react';
import './flight.scss';

const Flight = () => {
  return (
    <tr className="table__body-row">
      <td className="terminal-field ">
        <span className="">term</span>
      </td>
      <td className="time-field">localTime</td>
      <td className="way-field">
        <span>airportName</span>
      </td>
      <td className="terminal-field mobile-only  ">
        <span className="">term</span>
      </td>
      <td className="status-field">
        <span>status</span>
      </td>
      <td className="company-name">
        <div className="airline">
          <img className="airline__logo"  />
          <span>name</span>
        </div>
      </td>
      <td className="flight-field">
        <span>fltNo</span>
      </td>
      <td className="mobile-only company-name">
        <div className="airline">
          <img className="airline__logo"   />
          <span>name</span>
        </div>
      </td>
      <td className="details-field">
        <span>Flight details</span>
      </td>
    </tr>
  );
};

export default Flight;
