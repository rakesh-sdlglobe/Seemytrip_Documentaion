import React from 'react';
import '../css/FlightBooking.css';

const FlightBookingDocumentation = () => {
  return (
    <div className="flight-documentation">
      <h1>Flight Booking Documentation</h1>
      
      <h2>Introduction</h2>
      <p>
        This section provides an overview of the flight booking feature, including how users can book tickets,
        view schedules, and manage their bookings.
      </p>

      <h2>User Guide</h2>
      
      <h3>Accessing the Flight Booking Section</h3>
      <p>Users can navigate to the Flight Booking section from the homepage via the main menu.</p>

      <h3>Searching for Flights</h3>
      <ul>
        <li><strong>Step 1:</strong> Enter departure and destination airports, travel dates, and passenger count.</li>
        <li><strong>Step 2:</strong> Review available flights with details such as flight number, timings, and class options.</li>
        <li><strong>Step 3:</strong> Choose your preferred flight and proceed.</li>
      </ul>

      <h3>Booking Flights</h3>
      <p>Steps for booking a flight:</p>
      <ul>
        <li>Provide passenger information such as name, age, and ID proof.</li>
        <li>Select your seat preferences, if applicable.</li>
        <li>Complete the payment process using available methods.</li>
        <li>Receive confirmation via email or SMS.</li>
      </ul>

      <h3>Managing Bookings</h3>
      <p>Instructions on viewing, modifying, or canceling bookings can be found here.</p>

      <h2>Technical Specifications</h2>
      <p>This section outlines system requirements, supported browsers, and integrations for the flight booking feature.</p>
    </div>
  );
};

export default FlightBookingDocumentation;
