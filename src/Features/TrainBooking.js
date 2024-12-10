import React from "react";
import "../css/Trainbooking.css";
import CodeBlock from "../pages/CodeBlock";

const TrainSectionDocumentation = () => {
  const sampleCode = `
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
  `;

  return (
    <div className="train-container">
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
        <h3>Accessing the Train Section</h3>
        <p>
          Users can navigate to the Train Section from the homepage by clicking
          the "Train Tickets" button in the main menu.
        </p>
        <p>
          <strong>Example:</strong>
          <br />
          <img
            src="https://via.placeholder.com/800x400.png?text=Train+Section+Navigation+Example"
            alt="Train Section Navigation"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </p>

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
        <img
          src="https://via.placeholder.com/800x400.png?text=Train+Search+Example"
          alt="Train Search Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Code Snippet Example */}
      <section>
        <h2>Code Snippet Example</h2>
        <p>
          Below is an example code snippet for a React component that implements a simple counter:
        </p>
        <CodeBlock language="javascript" code={sampleCode} />
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
        <img
          src="https://via.placeholder.com/800x400.png?text=System+Requirements+Example"
          alt="System Requirements Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
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
        <img
          src="https://via.placeholder.com/800x400.png?text=Contact+Information+Example"
          alt="Contact Information Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>
    </div>
  );
};

export default TrainSectionDocumentation;
