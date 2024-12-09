import React from "react";
import '../css/Trainbooking.css';
import CodeBlock from '../pages/CodeBlock';

const TrainSectionDocumentation = () => {

const reactCode = `
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="code-container">
      <div className="copy-button">
        <button onClick={copyCode}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={solarizedlight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
  `;
  return (
    <div className="documentation-container">
      <h1>Train Section Documentation</h1>

      {/* Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          The Train Section is designed to provide users with a seamless
          experience for booking train tickets, viewing schedules, and managing
          their bookings. Users can search for trains, select their preferred
          class and coach, book tickets, and handle modifications to their
          bookings easily.
        </p>
      </section>

      {/* User Guide */}
      <section>
        <h2>User Guide</h2>

        {/* Accessing the Train Section */}
        <h3>Accessing the Train Section</h3>
        <p>
          Users can navigate to the Train Section from the homepage by clicking
          the "Train Tickets" button in the main menu.
        </p>
        <p>
          <strong>Example:</strong>
          <br />
          <img
            src="/static/images/train-navigation.png"
            alt="Train Section Navigation"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </p>
        {/* <CodeBlock language="javascript" code={reactCode} /> */}

        {/* Searching for Trains */}
        <h3>Searching for Trains</h3>
        <ol>
          <li>
            <strong>Enter Travel Details:</strong> Input departure and
            destination stations, travel date, and the number of passengers.
          </li>
          <li>
            <strong>Select Train:</strong> View available trains based on search
            criteria. Details include train number, departure/arrival time, and
            class options.
          </li>
          <li>
            <strong>Choose Class and Coach:</strong> Select the preferred class
            (e.g., Sleeper, AC, General) and coach.
          </li>
        </ol>

        {/* Booking Tickets */}
        <h3>Booking Tickets</h3>
        <ol>
          <li>
            <strong>Passenger Information:</strong> Provide passenger details,
            including name, age, and ID proof.
          </li>
          <li>
            <strong>Seat Selection:</strong> If available, choose seats from the
            seat map.
          </li>
          <li>
            <strong>Payment:</strong> Make payment using credit card, debit
            card, or net banking.
          </li>
          <li>
            <strong>Confirmation:</strong> Receive booking confirmation via
            email or SMS.
          </li>
        </ol>

        {/* Managing Bookings */}
        <h3>Managing Bookings</h3>
        <ul>
          <li>
            <strong>View Bookings:</strong> View existing bookings with filters
            like upcoming trips or past trips.
          </li>
          <li>
            <strong>Cancel or Modify Bookings:</strong> Cancel or modify a
            booking with applicable fees and policies.
          </li>
        </ul>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2>Technical Specifications</h2>
        <ul>
          <li>
            <strong>Supported Browsers:</strong> Chrome, Firefox, Safari, Edge.
          </li>
          <li>
            <strong>System Requirements:</strong> Minimum 2GB RAM, modern
            browsers, stable internet connection.
          </li>
          <li>
            <strong>Integrations:</strong> Train schedule APIs, secure payment
            gateways.
          </li>
        </ul>
      </section>

      {/* API Documentation */}
      <section>
        <h2>API Documentation</h2>
        <ul>
          <li>
            <strong>Endpoints:</strong> 
            <ul>
              <li>
                <code>GET /api/trains</code> - Fetch train schedules.
              </li>
              <li>
                <code>POST /api/bookings</code> - Create a new booking.
              </li>
              <li>
                <code>GET /api/bookings/:id</code> - Fetch booking details.
              </li>
            </ul>
          </li>
          <li>
            <strong>Request/Response Format:</strong> JSON
          </li>
          <li>
            <strong>Authentication:</strong> Use a token-based authentication
            system.
          </li>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li>
            <strong>Common Issues:</strong> 
            <ul>
              <li>Payment failure: Ensure a stable internet connection.</li>
              <li>
                Booking errors: Check passenger details and retry.
              </li>
            </ul>
          </li>
          <li>
            <strong>FAQs:</strong> 
            <ul>
              <li>
                <strong>Q:</strong> Can I modify my booking?<br />
                <strong>A:</strong> Yes, modifications can be done from the
                Manage Bookings section.
              </li>
              <li>
                <strong>Q:</strong> What payment methods are supported?<br />
                <strong>A:</strong> Credit card, debit card, and net banking.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Contact Information */}
      <section>
        <h2>Contact Information</h2>
        <p>
          For support, reach out via:
          <ul>
            <li>Phone: +1-800-123-456</li>
            <li>Email: support@trainservice.com</li>
            <li>Live Chat: Available on the website</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default TrainSectionDocumentation;
