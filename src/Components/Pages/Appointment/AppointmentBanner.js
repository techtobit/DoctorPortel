import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import format from "date-fns/format";
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
 return (
  <div className="hero min-h-screen ">
   <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='dental chair' />
    <div>
     <DayPicker
      mode='single'
      selected={selectedDate}
      onSelect={setSelectedDate}
     />
     <p>You have selected :{format(selectedDate, "dd-MM-yyyy")}</p>
    </div>
   </div>

  </div>
 );
};

export default AppointmentBanner;