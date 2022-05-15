import React, { useEffect, useState } from 'react';
import format from "date-fns/format";
import DoAppointment from './DoAppointment';
import BookServices from './BookTreatment';

const AvailableAppointment = ({ date }) => {
  const [services, setservices] = useState([]);
  const [treatment, setTreatment] = useState(null)
  useEffect(() => {
    fetch('Doctorsportal.json')
      .then(res => res.json())
      .then(data => setservices(data))
  }, [])
  return (
    <div>
      <div className="available ">
        <h2 className='text-2xl font-bold text-center text-primary underline'>You have selected :{format(date, "PP")}</h2>
        <div className="displayServices grid grid-cols-1 lg:grid-cols-3 gap-10 py-5 justify-center ">
          {
            services.map(service => <DoAppointment
              key={service.id}
              service={service}
              setTreatment={setTreatment}
            ></DoAppointment>)
          }
        </div>
        {treatment && <BookServices
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        ></BookServices>}
      </div>

    </div>
  );
};

export default AvailableAppointment;