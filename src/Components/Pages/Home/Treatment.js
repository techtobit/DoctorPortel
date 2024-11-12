import React from 'react';
import treatments from '../../../assets/images/treatment.png'

const Treatment = () => {
 return (
  <div className="card lg:card-side w-7/12  bg-base-100 shadow-xl grid grid-cols-2">
   <figure><img className='w-80' src={treatments} alt="Album" /></figure>
   <div className="grid content-center">
    <h2 className="">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className=" justify-start">
     <button className="btn btn-primary">Listen</button>
    </div>
   </div>
  </div>
 );
};

export default Treatment;