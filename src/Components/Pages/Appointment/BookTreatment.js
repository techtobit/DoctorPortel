import React from 'react';
import format from "date-fns/format";

const BookTreatment = ({ treatment, date, setTreatment }) => {
 const { name, slots } = treatment

 const handelBookTreatment = e => {
  e.preventDefault();
  const slot = e.target.slot.value;
  console.log(slot);
  setTreatment(null)
 }

 return (
  <div>

   <input type="checkbox" id="Book-Treatment" className="modal-toggle" />
   <div className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
     <label for="Book-Treatment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
     <h3 className="font-bold text-lg py-2 text-center uppercase">Booking For : <span className='text-primary'>{name}</span></h3>
     {/* booking form  */}
     <form onSubmit={handelBookTreatment} className='grid grid-cols-1 justify-center justify-items-center w-full' >
      <input type="text" value={format(date, "PP")} disabled className="my-2 input input-bordered w-full max-w-xs" />
      <select name='slot' className="select select-bordered w-full max-w-xs " >
       {
        slots.map(slot => <option value={slot}>{slot}</option>)
       }
      </select>
      <input type="text" placeholder="Full Name*" className="my-2 input input-bordered w-full max-w-xs" />
      <input type="number" placeholder="Phone Number*" className="my-2 input input-bordered w-full max-w-xs" />
      <input type="email" placeholder="Email" className=" my-2 input input-bordered w-full max-w-xs" />
      <input type="submit" value='submit' className=" my-2 input  w-full max-w-xs bg-primary text-white uppercase font-bold" />
     </form>
    </div>
   </div>
  </div>
 );
};

export default BookTreatment;