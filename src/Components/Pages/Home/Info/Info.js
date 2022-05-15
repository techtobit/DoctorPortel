import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../../assets/icons/clock.svg'
import location from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'

const Info = () => {
 return (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white'>
   <InfoCard cardTitle="Opening Hours" img={clock} bgClass='bg-gradient-to-r from-cyan-500 to-blue-500'></InfoCard>
   <InfoCard cardTitle="Visit our location" img={location} bgClass='bg-accent'></InfoCard>
   <InfoCard cardTitle="Contact us now" img={phone} bgClass='bg-gradient-to-r from-cyan-500 to-blue-500'></InfoCard>
  </div>
 );
};

export default Info;