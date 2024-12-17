// App.js
import React, {useState } from 'react';
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
import CruiseSection from './Features/CruiseBooking';
import BusSection from './Features/BusBooking';
import BusinessTourism from './Features/BusinessTourism';
import HealthTourism from './Features/HealthTourism';
import SupportChannel from './CustomerSupport/SupportChannel';
import FAQSection from './CustomerSupport/FAQSection';
import Availability from './CustomerSupport/Availability';
import SystemRequirements from './TechnicalSpecifications/SystemRequirements';
import ApiIntegration from './TechnicalSpecifications/ApiIntegration';
import DataSecurityPrivacy from './TechnicalSpecifications/DataSecurityPrivacy';
import RegistrationAccountManagement  from './UserFlow/RegistrationAccountManagement';
import SearchFilterOptions  from './UserFlow/SearchFilterOptions';
import BookingProcess  from './UserFlow/BookingProcess';
import PaymentMethod  from './UserFlow/PaymentMethod';
import BookingConfirmation   from './UserFlow/BookingConfirmation';
import LoginPage from './components/LoginPage'; // Import your LoginPage
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to handle login (could integrate real authentication here)
  const handleLogin = (email, password) => {
    // Replace with actual authentication logic
    if (email === 'admin@example.com' && password === '123') {
      setIsLoggedIn(true); // Set login state to true
    } else {
      alert('Invalid login credentials');
    }
  };

  // If not logged in, render only the LoginPage
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }
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
              <Route path="/features/cruise-booking" element={<CruiseSection />} />
              <Route path="/features/bus-booking" element={<BusSection />} />
              <Route path="/features/business_tourism" element={<BusinessTourism />} />
              <Route path="/features/health_tourism" element={<HealthTourism />} />
              <Route path="/channels/customer-support" element={<SupportChannel />} />
              <Route path="/faq/customer-support" element={<FAQSection />} />
              <Route path="/availability/customer-support" element={<Availability />} />
              
              <Route path="/requirements/technical-specifications" element={<SystemRequirements />} />
              <Route path="/apis/technical-specifications" element={<ApiIntegration />} />
              <Route path="/security/technical-specifications" element={<DataSecurityPrivacy />} />
             
              <Route path="/user-flow/registration" element={<RegistrationAccountManagement />} />
              <Route path="/user-flow/search" element={<SearchFilterOptions />} />
              <Route path="/user-flow/booking" element={<BookingProcess />} />
              <Route path="/user-flow/payment" element={<PaymentMethod />} />
              <Route path="/user-flow/confirmation" element={<BookingConfirmation  />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
