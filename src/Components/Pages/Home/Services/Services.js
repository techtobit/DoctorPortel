import React from 'react';
import Service from './Service';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Treatment from '../Treatment';

const Services = () => {
 const services = [
  {
   _id: 1,
   name: 'Flouoride Treatment',
   discription: "",
   img: fluoride,
  },
  {
   _id: 1,
   name: 'Flouoride Treatment',
   discription: "",
   img: cavity,
  },
  {
   _id: 1,
   name: 'Flouoride Treatment',
   discription: "",
   img: whitening,
  },
 ]
 return (
  <div className='py-20'>
   <div className='text-center '>
    <h3 className='text-2xl font-bold uppercase text-primary'>Our services</h3>
    <h1 className='text-5xl font-bold'>Services We Provide</h1>
   </div>
   <div className="services-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {
     services.map(service => <Service
      key={service._id}
      service={service}
     ></Service>)
    }
   </div>
   <div className=" flex justify-center py-20">
    <Treatment></Treatment>
   </div>
  </div>
 );
};

export default Services;