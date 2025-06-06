
import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
  return (
    <div className='successBlock'>
      <h2
       >Thank you!</h2>
      <p className='simpleSecondText'>Your message was successfully sent.</p>
      <Link to="/" className='simpleBtn simpleSecondText'>← Back to Home</Link>
    </div>
  );
}