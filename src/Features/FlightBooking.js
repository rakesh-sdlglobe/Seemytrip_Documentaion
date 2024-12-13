/**
 * Technical Documentation for Flight Booking Feature
 * ================================================
 * This documentation provides detailed technical information about the flight booking feature, 
 * including system architecture, APIs, and key components.
 */

import React from 'react';
import '../css/FlightBooking.css';
import CodeBlock from '../pages/CodeBlock';

// Import local images
import FlightNavigationImage from '../images/Features/flight_navigation.png';
import FlightSearchImage from '../images/Features/flightsearch_image.png';
import FlightBookingProcessImage from '../images/Features/flightbookingprocess_image.png';
// import TechnicalSpecificationsImage from '../images/Features/technical_specifications.png';
import TechnicalSpecificationsImage from '../images/Features/flightbookingprocess_image.png';

const FlightBookingDocumentation = () => {
  const sampleCode = `
import React, { useState } from 'react';

const FlightSearch = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    departure: '',
    destination: '',
    date: ''
  });

  const handleSearch = () => {
    console.log('Searching flights for:', searchCriteria);
  };

  return (
    <div>
      <h3>Flight Search</h3>
      <input 
        type="text" 
        placeholder="Departure" 
        value={searchCriteria.departure} 
        onChange={(e) => setSearchCriteria({ ...searchCriteria, departure: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Destination" 
        value={searchCriteria.destination} 
        onChange={(e) => setSearchCriteria({ ...searchCriteria, destination: e.target.value })}
      />
      <input 
        type="date" 
        value={searchCriteria.date} 
        onChange={(e) => setSearchCriteria({ ...searchCriteria, date: e.target.value })}
      />
      <button onClick={handleSearch}>Search Flights</button>
    </div>
  );
};

export default FlightSearch;
  `;

  const apiExample = `
// API Example: Fetching Flights
GET /api/flights
{
  "departure": "BAN",
  "destination": "DEL",
  "date": "2024-12-25"
}

// Response
{
  "flights": [
    {
      "id": 1,
      "flightNumber": "AA101",
      "departureTime": "10:00 AM",
      "arrivalTime": "1:00 PM",
      "price": 9500
    },
    {
      "id": 2,
      "flightNumber": "UA202",
      "departureTime": "12:00 PM",
      "arrivalTime": "3:00 PM",
      "price": 14000
    }
  ]
}
  `;

  return (
    <div className="flight-documentation">
      <h1>Flight Booking Documentation</h1>

      {/* Introduction */}
      <h2>Introduction</h2>
      <p>
        This documentation provides an overview of the flight booking feature, including how users can book tickets,
        view schedules, and manage their bookings.
      </p>

      {/* User Guide Section */}
      <h2>User Guide</h2>

      <h3>Accessing the Flight Booking Section</h3>
      <p>Users can navigate to the Flight Booking section from the homepage via the main menu.</p>
      <img
        src={FlightNavigationImage}
        alt="Flight Navigation Example"
        style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
      />

      <h3>Searching for Flights</h3>
      <ul>
        <li><strong>Step 1:</strong> Enter departure and destination airports, travel dates, and passenger count.</li>
        <li><strong>Step 2:</strong> Review available flights with details such as flight number, timings, and class options.</li>
        <li><strong>Step 3:</strong> Choose your preferred flight and proceed.</li>
      </ul>
      <img
        src={FlightSearchImage}
        alt="Flight Search Example"
        style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
      />

      <h3>Booking Flights</h3>
      <p>Steps for booking a flight:</p>
      <ul>
        <li>Provide passenger information such as name, age, and ID proof.</li>
        <li>Select your seat preferences, if applicable.</li>
        <li>Complete the payment process using available methods.</li>
        <li>Receive confirmation via email or SMS.</li>
      </ul>
      <img
        src={FlightBookingProcessImage}
        alt="Flight Booking Process Example"
        style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
      />

      <h3>Managing Bookings</h3>
      <p>Instructions on viewing, modifying, or canceling bookings can be found here.</p>

      {/* Code Snippet Section */}
      <h2>Code Snippet Example</h2>
      <p>Here is an example of a React component for searching flights:</p>
      <CodeBlock language="javascript" code={sampleCode} />

      <h3>API Integration Example</h3>
      <p>Below is an example of how the API can be used to fetch flight data:</p>
      <CodeBlock language="javascript" code={apiExample} />

      {/* Technical Specifications Section */}
      <h2>Technical Specifications</h2>
      <p>This section outlines system requirements, supported browsers, and integrations for the flight booking feature.</p>
      <img
        src={TechnicalSpecificationsImage}
        alt="Technical Specifications Example"
        style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
      />

      <h3>System Architecture</h3>
      <ul>
        <li><strong>Frontend:</strong> React.js for UI components, styled using CSS modules.</li>
        <li><strong>Backend:</strong> Node.js with Express.js for API handling.</li>
        <li><strong>Database:</strong> MySQL for storing flight and booking data.</li>
        <li><strong>Authentication:</strong> JWT-based authentication for secure access.</li>
      </ul>

      <h3>Supported Browsers</h3>
      <ul>
        <li>Google Chrome (latest version)</li>
        <li>Mozilla Firefox (latest version)</li>
        <li>Safari (latest version)</li>
        <li>Microsoft Edge (latest version)</li>
      </ul>

      <h3>Key Integrations</h3>
      <ul>
        <li>Payment Gateway: Integrated with UPI and VISA for secure payments.</li>
        <li>Flight Data: Uses third-party APIs for real-time flight availability.</li>
      </ul>
    </div>
  );
};

export default FlightBookingDocumentation;
