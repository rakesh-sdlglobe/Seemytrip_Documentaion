import React from "react";
import "../css/HotelBooking.css";
import CodeBlock from "../pages/CodeBlock";

// Import local images
import HotelNavigationImage from "../images/Features/hotel_navigation.png";
import HotelSearchImage from "../images/Features/hotelsearch_image.png";
import SystemRequirementsImage from "../images/Features/hotel_navigation.png";
import ContactInformationImage from "../images/Features/hotel_navigation.png";

const HotelBooking = () => {
  const sampleCode = `
import React, { useState } from 'react';

const BookingForm = () => {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Booking for \${guestName} submitted!\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Guest Name:
        <input 
          type="text" 
          value={guestName} 
          onChange={(e) => setGuestName(e.target.value)} 
        />
      </label>
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </label>
      <label>
        Check-In Date:
        <input 
          type="date" 
          value={checkInDate} 
          onChange={(e) => setCheckInDate(e.target.value)} 
        />
      </label>
      <label>
        Check-Out Date:
        <input 
          type="date" 
          value={checkOutDate} 
          onChange={(e) => setCheckOutDate(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
  `;

  return (
    <div className="hotel-container">
      <h1>Hotel Booking Documentation</h1>

      {/* Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Hotel Booking</strong> section allows users to search for, book, and manage their hotel reservations. This platform simplifies the process of finding accommodations, enabling users to input their travel preferences, view available rooms, select the right accommodations, and finalize bookings. Additionally, the system supports modifying or canceling bookings and making payment securely, all through an intuitive user interface.
        </p>
        <p>
          Whether traveling for business or leisure, this platform provides a seamless and efficient experience for hotel bookings. The system ensures that users can book with ease, access detailed hotel information, and manage their stays effectively.
        </p>
      </section>

      {/* User Guide */}
      <section>
        <h2>User Guide</h2>
        
        <h3>Accessing the Hotel Booking Section</h3>
        <p>
          Users can navigate to the Hotel Booking section by clicking on the "Hotel Booking" option in the main menu. Once there, they can explore different search options and find available hotels tailored to their preferences.
        </p>
        <img
          src={HotelNavigationImage}
          alt="Hotel Booking Navigation"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />

        <h3>Searching for Hotels</h3>
        <p>
          To begin the hotel booking process, follow these steps:
        </p>
        <ol>
          <li>
            <strong>Enter Travel Details:</strong> Input the destination, check-in and check-out dates, and the number of guests. The system will then narrow down search results based on these criteria.
          </li>
          <li>
            <strong>View Available Hotels:</strong> A list of available hotels will appear with details such as the hotel's name, location, room types, and price per night. Each hotel is accompanied by a detailed description to help users make an informed decision.
          </li>
          <li>
            <strong>Select Room Type:</strong> Once you find the right hotel, select the room type that best fits your needs. This may include single, double, suite, or family rooms, with options to add extra amenities.
          </li>
          <li>
            <strong>Proceed with Booking:</strong> After selecting the desired room, proceed with filling in personal details, including your name, contact information, and payment details. Once confirmed, your booking will be processed and an email confirmation will be sent.
          </li>
        </ol>
        <img
          src={HotelSearchImage}
          alt="Hotel Search Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Code Snippet Example */}
      <section>
        <h2>Code Snippet Example</h2>
        <p>
          Below is an example code snippet for a simple React component implementing a hotel booking form where users can submit their details to book a room:
        </p>
        <CodeBlock language="javascript" code={sampleCode} />
        <p>
          In the example above, we define a basic form using React's `useState` to manage the input values for guest name, email, and check-in/check-out dates. Once the user submits the form, an alert is displayed confirming their booking.
        </p>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2>Technical Specifications</h2>
        <ul>
          <li>
            <strong>Supported Browsers:</strong> The hotel booking platform supports modern browsers, including Chrome, Firefox, Safari, and Edge. Ensure your browser is up-to-date for the best experience.
          </li>
          <li>
            <strong>System Requirements:</strong> The platform runs optimally on systems with at least 2GB of RAM. A stable internet connection is required to search and book hotels efficiently. The platform is designed to be responsive and accessible across various devices.
          </li>
          <li>
            <strong>Integrations:</strong> The booking system integrates with third-party hotel search APIs, enabling users to access real-time availability and room pricing. It also includes secure payment gateways to complete bookings safely.
          </li>
        </ul>
        {/* <img
          src={SystemRequirementsImage}
          alt="System Requirements Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
      </section>

      {/* Troubleshooting */}
      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li>
            <strong>Common Issues:</strong>
            <ul>
              <li><strong>Payment failure:</strong> Ensure your internet connection is stable and check your payment details. Try again after refreshing the page.</li>
              <li><strong>Booking errors:</strong> Double-check travel details, including destination and dates. If the problem persists, clear your browser cache and cookies, then try again.</li>
              <li><strong>Hotel unavailable:</strong> If a hotel is unavailable, try modifying your travel dates or choose a different hotel from the list.</li>
            </ul>
          </li>
          <li>
            <strong>FAQs:</strong>
            <ul>
              <li>
                <strong>Q:</strong> Can I modify my booking?<br />
                <strong>A:</strong> Yes, you can modify your booking through the "Manage Bookings" section. You can update details such as check-in/check-out dates or room type.
              </li>
              <li>
                <strong>Q:</strong> What payment methods are supported?<br />
                <strong>A:</strong> We accept credit cards, debit cards, and popular digital wallets like PayPal and Google Pay.
              </li>
              <li>
                <strong>Q:</strong> How do I cancel my booking?<br />
                <strong>A:</strong> You can cancel your booking by accessing your profile and selecting the "Cancel Booking" option. Ensure that you review the cancellation policy before proceeding.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Contact Information */}
      <section>
        <h2>Contact Information</h2>
        <p>
          If you experience any issues or have questions, feel free to reach out to our support team:
          <ul>
            <li>Phone: +1-800-123-456</li>
            <li>Email: support@hotelbooking.com</li>
            <li>Live Chat: Available 24/7 on the website for immediate assistance</li>
            <li>Address: 1234 Hotel Avenue, Suite 101, City, State, ZIP</li>
          </ul>
        </p>
        {/* <img
          src={ContactInformationImage}
          alt="Contact Information Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
      </section>
    </div>
  );
};

export default HotelBooking;
