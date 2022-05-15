import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import MainBtn from '../Shared/Buttons/MainBtn';

const Appointment = () => {
 return (
  <section className='flex justify-center items-center'
   style={{
    background: `url(${appointment})`
   }}
  >
   <div className='flex-1'>
    <img className='mt-[-150px]' src={doctor} alt="" />
   </div>
   <div className='flex-1 text-white'>
    <h2 className='text-2xl font-bold text-primary'>Appointment</h2>
    <h2 className='text-4xl font-bold'>Get your Appointment Today</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quo similique unde esse vero quam est, nobis ea enim quos sunt modi aspernatur, neque vitae minima doloremque numquam animi optio.
     Alias animi consequuntur nesciunt aspernatur voluptatum dolorem commodi natus unde at delectus eius eaque architecto possimus aperiam voluptatem fugiat, distinctio numquam sed. Iusto pariatur
     alias molestias, rem autem reprehenderit necessitatibus.</p>
    <MainBtn>Available</MainBtn>
   </div>

  </section>
 );
};

export default Appointment;