
import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      height: '100vh', backgroundColor: '#f2f2f2', color: '#333', textAlign: 'center'
    }}>
      <h1 style={{ color: '#4CAF50' }}>Thank you!</h1>
      <p>Your message was successfully sent.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}