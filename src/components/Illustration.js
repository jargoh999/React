// src/Illustration.js
import React from 'react';
import './Illustration.css'

const Illustration = ({src ,value}) => {
  return <div className='illustration'>
      <img src={src} alt={value} />
  </div>;
};

export default Illustration;
