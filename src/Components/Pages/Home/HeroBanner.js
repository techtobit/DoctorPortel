import React from 'react';
import heroBanner from '../../../assets/images/chair.png'
import heroBg from '../../../assets/images/bg.png'
import MainBtn from '../Shared/Buttons/MainBtn';

const HeroBanner = () => {
 return (
  <div className="hero min-h-screen bg-white"
   style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
   }}>
   <div className="hero-overlay bg-opacity-0"></div>

   <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={heroBanner} className="max-w-sm rounded-lg shadow-2xl" alt='heroBanner'/>
    <div className="hero min-h-screen w-50">
     <div className="">
      <h1 className="mb-5 text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
       <br />
       industry's standard dummy text ever since the.</p>
      <MainBtn>Get Started</MainBtn>
     </div>
    </div>


   </div>
  </div>
 );
};

export default HeroBanner;