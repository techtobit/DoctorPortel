import React from 'react';

const DoAppointment = ({ service, setTreatment }) => {
  const { _id, name, slots } = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl grid justify-center text-center">
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>
          {
            slots.length > 0
              ? <span>{slots[0]}</span>
              :
              <span>No Slot Available</span>
          }
        </p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions mx-w-full justify-center btn-block  ">
          <label for="Book-Treatment"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-block btn-primary text-white uppercase font-bold  modal-button">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default DoAppointment;