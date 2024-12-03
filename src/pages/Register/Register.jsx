import React from 'react';
import "../Register/register.css";
import RegisterSection from '../../Sections/RegisterSection/RegisterSection';

function Register() {
  return (
    <div className='register'>
      <div className="container">
        <RegisterSection/>
      </div>
    </div>
  )
}

export default Register