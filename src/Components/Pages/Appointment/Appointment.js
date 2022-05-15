import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
 const [selectedDate, setSelectedDate] = useState(new Date());
 return (
  <div className=''>
   <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
   <AvailableAppointment date={selectedDate}></AvailableAppointment>
  </div>
 );
};

export default Appointment;