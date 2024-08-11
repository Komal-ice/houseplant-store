// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={LandingPage} />
        <Route path="/products" component={ProductListingPage} />
        
      </Routes>
    </Router>
  );
};

export default App;
