import React from 'react';

const MainBtn = ({ children }) => {
 return (
  <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-cyan-500 to-blue-500">{children}</button>
 );
};

export default MainBtn;