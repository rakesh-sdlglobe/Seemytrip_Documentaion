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
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
