import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar.css';

const Sidebar = () => {
  const [active, setActive] = useState('/');
  const [expanded, setExpanded] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="brand">
          <h2>SeeMyTrip</h2>
        </div>
        <ul>
          {/* Introduction */}
          <li>
            <Link
              to="/"
              className={active === '/' ? 'active' : ''}
              onClick={() => setActive('/')}
            >
              <i className="fas fa-home"></i> Introduction
            </Link>
          </li>

          {/* Features */}
          <li>
            <button onClick={() => toggleExpand('features')}>
              <i className="fas fa-list-alt"></i> Features
              <span className={`dot ${expanded === 'features' ? 'expanded' : ''}`}></span>
            </button>
            {expanded === 'features' && (
              <ul className="submenu">
                <li>
                  <Link to="/features/flight-booking">
                    <i className="fas fa-plane"></i> Flight Booking
                  </Link>
                </li>
                <li>
                  <Link to="/features/hotel-booking">
                    <i className="fas fa-hotel"></i> Hotel Booking
                  </Link>
                </li>
                <li>
                  <Link to="/features/holiday-packages">
                    <i className="fas fa-suitcase"></i> Holiday Packages
                  </Link>
                </li>
                <li>
                  <Link to="/features/car-rental">
                    <i className="fas fa-car"></i> Car Rental, Bus, and Train Booking
                  </Link>
                </li>
                <li>
                  <Link to="/features/visa-insurance">
                    <i className="fas fa-passport"></i> Visa and Travel Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/features/mobile-app">
                    <i className="fas fa-mobile-alt"></i> Mobile App Features
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* User Flow */}
          <li>
            <button onClick={() => toggleExpand('user-flow')}>
              <i className="fas fa-project-diagram"></i> User Flow
              <span className={`dot ${expanded === 'features' ? 'expanded' : ''}`}></span>
            </button>
            {expanded === 'user-flow' && (
              <ul className="submenu">
                <li>
                  <Link to="/user-flow/registration">
                    <i className="fas fa-user-plus"></i> Registration and Account Management
                  </Link>
                </li>
                <li>
                  <Link to="/user-flow/search">
                    <i className="fas fa-search"></i> Search and Filter Options
                  </Link>
                </li>
                <li>
                  <Link to="/user-flow/booking">
                    <i className="fas fa-book"></i> Booking Process
                  </Link>
                </li>
                <li>
                  <Link to="/user-flow/payment">
                    <i className="fas fa-credit-card"></i> Payment Methods
                  </Link>
                </li>
                <li>
                  <Link to="/user-flow/confirmation">
                    <i className="fas fa-check-circle"></i> Booking Confirmation and Updates
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Customer Support */}
          <li>
            <button onClick={() => toggleExpand('customer-support')}>
              <i className="fas fa-headset"></i> Customer Support
              <span className={`dot ${expanded === 'features' ? 'expanded' : ''}`}></span>
            </button>
            {expanded === 'customer-support' && (
              <ul className="submenu">
                <li>
                  <Link to="/customer-support/channels">
                    <i className="fas fa-phone"></i> Support Channels
                  </Link>
                </li>
                <li>
                  <Link to="/customer-support/faq">
                    <i className="fas fa-question-circle"></i> FAQ Section
                  </Link>
                </li>
                <li>
                  <Link to="/customer-support/availability">
                    <i className="fas fa-clock"></i> 24/7 Availability
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Technical Specifications */}
          <li>
            <button onClick={() => toggleExpand('technical-specifications')}>
              <i className="fas fa-cogs"></i> Technical Specifications
              <span className={`dot ${expanded === 'features' ? 'expanded' : ''}`}></span>
            </button>
            {expanded === 'technical-specifications' && (
              <ul className="submenu">
                <li>
                  <Link to="/technical-specifications/requirements">
                    <i className="fas fa-desktop"></i> System Requirements
                  </Link>
                </li>
                <li>
                  <Link to="/technical-specifications/apis">
                    <i className="fas fa-plug"></i> APIs and Integrations
                  </Link>
                </li>
                <li>
                  <Link to="/technical-specifications/security">
                    <i className="fas fa-shield-alt"></i> Data Security and Privacy
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Sections */}
          <li>
            <Link
              to="/pricing-plans"
              className={active === '/pricing-plans' ? 'active' : ''}
              onClick={() => setActive('/pricing-plans')}
            >
              <i className="fas fa-tags"></i> Pricing and Plans
            </Link>
          </li>
          <li>
            <Link
              to="/benefits"
              className={active === '/benefits' ? 'active' : ''}
              onClick={() => setActive('/benefits')}
            >
              <i className="fas fa-gift"></i> Benefits of Using SeeMyTrip
            </Link>
          </li>
          <li>
            <Link
              to="/security-privacy"
              className={active === '/security-privacy' ? 'active' : ''}
              onClick={() => setActive('/security-privacy')}
            >
              <i className="fas fa-shield-alt"></i> Security and Data Privacy
            </Link>
          </li>
          <li>
            <Link
              to="/troubleshooting"
              className={active === '/troubleshooting' ? 'active' : ''}
              onClick={() => setActive('/troubleshooting')}
            >
              <i className="fas fa-tools"></i> Troubleshooting
            </Link>
          </li>
          <li>
            <Link
              to="/appendix"
              className={active === '/appendix' ? 'active' : ''}
              onClick={() => setActive('/appendix')}
            >
              <i className="fas fa-book"></i> Appendix
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
