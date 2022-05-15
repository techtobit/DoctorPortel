import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
 return (
  <div class={`card lg:card-side shadow-xl bg-primary ${bgClass}`}>
   <figure><img className='w-50 h-50' src={img} alt="Album" /></figure>
   <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
   </div>
  </div>
 );
};

export default InfoCard;