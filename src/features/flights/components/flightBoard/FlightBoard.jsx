import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import moment from 'moment/moment';
import TypeSwitchers from '../typeSwitcher/TypeSwitchers';
import DatePicker from '../datePicker/DatePicker';
import FlightsList from '../flightsList/FlightsList';
import './flight-board.scss';

const FlightBoard = () => {
  const getCurrentDate = () => moment(new Date(), 'DD-MM-YYYY').format('YYYY-MM-DD');

  return (
    <div className="flightboard">
      <TypeSwitchers />
      <DatePicker />
      <Routes>
        <Route path="/" element={<Navigate to={`departures?date=${getCurrentDate()}`} replace />} />
        <Route path="/departures" element={<FlightsList />}></Route>
        <Route path="/arrivals" element={<FlightsList />}></Route>
      </Routes>
    </div>
  );
};

export default FlightBoard;
