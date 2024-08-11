// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image">
        <h1>Company Name</h1>
        <p>Welcome to our houseplant store! We offer a variety of beautiful plants for your home.</p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
