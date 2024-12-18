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
        <i className={isSidebarOpen ? "fas fa-times" : "fas fa-bars"}></i>
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
                  <Link
                    to="/features/train-booking"
                    className={active === '/features/train-booking' ? 'active' : ''}
                    onClick={() => setActive('/features/train-booking')}
                  >
                    <i className="fas fa-train"></i> Train Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/flight-booking"
                    className={active === '/features/flight-booking' ? 'active' : ''}
                    onClick={() => setActive('/features/flight-booking')}
                  >
                    <i className="fas fa-plane"></i> Flight Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/hotel-booking"
                    className={active === '/features/hotel-booking' ? 'active' : ''}
                    onClick={() => setActive('/features/hotel-booking')}
                  >
                    <i className="fas fa-hotel"></i> Hotel Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/cabs-booking"
                    className={active === '/features/cabs-booking' ? 'active' : ''}
                    onClick={() => setActive('/features/cabs-booking')}
                  >
                    <i className="fas fa-car"></i> Cabs Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/cruise-booking"
                    className={active === '/features/cruise-booking' ? 'active' : ''}
                    onClick={() => setActive('/features/cruise-booking')}
                  >
                    <i className="fas fa-ship"></i> Cruise Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/bus-booking"
                    className={active === '/features/bus-booking' ? 'active' : ''}
                    onClick={() => setActive('/features/bus-booking')}
                  >
                    <i className="fas fa-bus"></i> Bus Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/business_tourism"
                    className={active === '/features/business_tourism' ? 'active' : ''}
                    onClick={() => setActive('/features/business_tourism')}
                  >
                    <i className="fas fa-briefcase"></i> Business Tourism
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/health_tourism"
                    className={active === '/features/health_tourism' ? 'active' : ''}
                    onClick={() => setActive('/features/health_tourism')}
                  >
                    <i className="fas fa-heartbeat"></i> Health Tourism
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* User Flow */}
          <li>
            <button onClick={() => toggleExpand('user-flow')}>
              <i className="fas fa-project-diagram"></i> User Flow
              <span className={`dot ${expanded === 'user-flow' ? 'expanded' : ''}`}></span>
            </button>
            {expanded === 'user-flow' && (
              <ul className="submenu">
                <li>
                  <Link
                    to="/user-flow/registration"
                    className={active === '/user-flow/registration' ? 'active' : ''}
                    onClick={() => setActive('/user-flow/registration')}
                  >
                    <i className="fas fa-user-plus"></i> Registration and Account Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user-flow/search"
                    className={active === '/user-flow/search' ? 'active' : ''}
                    onClick={() => setActive('/user-flow/search')}
                  >
                    <i className="fas fa-search"></i> Search and Filter Options
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user-flow/booking"
                    className={active === '/user-flow/booking' ? 'active' : ''}
                    onClick={() => setActive('/user-flow/booking')}
                  >
                    <i className="fas fa-book"></i> Booking Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user-flow/payment"
                    className={active === '/user-flow/payment' ? 'active' : ''}
                    onClick={() => setActive('/user-flow/payment')}
                  >
                    <i className="fas fa-credit-card"></i> Payment Methods
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user-flow/confirmation"
                    className={active === '/user-flow/confirmation' ? 'active' : ''}
                    onClick={() => setActive('/user-flow/confirmation')}
                  >
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
              <span className={`dot ${expanded === 'customer-support' ? 'expanded' : ''}`}></span>
            </button>
            {expanded === 'customer-support' && (
              <ul className="submenu">
                <li>
                  <Link
                    to="/channels/customer-support"
                    className={active === '/channels/customer-support' ? 'active' : ''}
                    onClick={() => setActive('/channels/customer-support')}
                  >
                    <i className="fas fa-phone"></i> Support Channels
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq/customer-support"
                    className={active === '/faq/customer-support' ? 'active' : ''}
                    onClick={() => setActive('/faq/customer-support')}
                  >
                    <i className="fas fa-question-circle"></i> FAQ Section
                  </Link>
                </li>
                <li>
                  <Link
                    to="/availability/customer-support"
                    className={active === '/availability/customer-support' ? 'active' : ''}
                    onClick={() => setActive('/availability/customer-support')}
                  >
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
              <span className={`dot ${expanded === 'technical-specifications' ? 'expanded' : ''}`}></span>
            </button>
            {expanded === 'technical-specifications' && (
              <ul className="submenu">
                <li>
                  <Link
                    to="/requirements/technical-specifications"
                    className={active === '/requirements/technical-specifications' ? 'active' : ''}
                    onClick={() => setActive('/requirements/technical-specifications')}
                  >
                    <i className="fas fa-desktop"></i> System Requirements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apis/technical-specifications"
                    className={active === '/apis/technical-specifications' ? 'active' : ''}
                    onClick={() => setActive('/apis/technical-specifications')}
                  >
                    <i className="fas fa-plug"></i> APIs and Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security/technical-specifications"
                    className={active === '/security/technical-specifications' ? 'active' : ''}
                    onClick={() => setActive('/security/technical-specifications')}
                  >
                    <i className="fas fa-lock"></i> Security Measures
                  </Link>
                </li>
                <li>
                  <Link
                    to="/maintenance/technical-specifications"
                    className={active === '/maintenance/technical-specifications' ? 'active' : ''}
                    onClick={() => setActive('/maintenance/technical-specifications')}
                  >
                    <i className="fas fa-tools"></i> Maintenance and Support
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
