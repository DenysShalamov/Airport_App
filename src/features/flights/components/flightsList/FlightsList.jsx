import React from 'react';
import Flight from '../flight/Flight';
import './flights-list.scss';

const FlightsList = () => {
 
  return (
    <div className="flights-table">
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th>Flight</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Flight/>
        </tbody>
      </table>
    </div>
  );
};



export default FlightsList;
