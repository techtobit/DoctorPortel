import React from 'react';
import Appointment from './Appointment';
import HeroBanner from './HeroBanner';

import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
 return (
  <div className='px-10'>
   <HeroBanner></HeroBanner>
   <Info></Info>
   <Services></Services>
   <Appointment></Appointment>
  </div>
 );
};

export default Home;