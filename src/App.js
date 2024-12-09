// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Features from './pages/Features';
import UserFlow from './pages/UserFlow';
import CustomerSupport from './pages/CustomerSupport';
import PricingPlans from './pages/PricingPlans';
import Benefits from './pages/Benefits';
import SecurityPrivacy from './pages/SecurityPrivacy';
import TechnicalSpecifications from './pages/TechnicalSpecifications';
import Troubleshooting from './pages/Troubleshooting';
import Appendix from './pages/Appendix';
import TrainSection from './Features/TrainBooking';
import FlightSection from './Features/FlightBooking';
import HotelSection from './Features/HotelBooking';
import CabSection from './Features/CabBooking';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/features" element={<Features />} />
              <Route path="/user-flow" element={<UserFlow />} />
              <Route path="/customer-support" element={<CustomerSupport />} />
              <Route path="/pricing-plans" element={<PricingPlans />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/security-privacy" element={<SecurityPrivacy />} />
              <Route path="/technical-specifications" element={<TechnicalSpecifications />} />
              <Route path="/troubleshooting" element={<Troubleshooting />} />
              <Route path="/appendix" element={<Appendix />} />
              <Route path="/features/train-booking" element={<TrainSection />} />
              <Route path="/features/flight-booking" element={<FlightSection />} />
              <Route path="/features/hotel-booking" element={<HotelSection />} />
              <Route path="/features/cabs-booking" element={<CabSection />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
