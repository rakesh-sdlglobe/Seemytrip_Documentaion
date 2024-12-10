import React from 'react';
import '../css/Appendix.css';

const Appendix = () => {
  return (
    <div className="appendix-container">
      <h1>Appendix</h1>
      <p>The following appendix provides additional information, definitions, and references for users of SeeMyTrip. For more details on the features, functionality, and technical specifications, refer to the sections below.</p>

      <div className="section">
        <h2>1. Glossary of Terms</h2>
        <p>Here are some key terms used throughout the SeeMyTrip platform:</p>
        <ul>
          <li><strong>Booking:</strong> The process of reserving a travel service such as a bus, flight, or hotel.</li>
          <li><strong>Payment Gateway:</strong> An online service that processes credit/debit card payments for bookings.</li>
          <li><strong>Profile:</strong> The user account which includes personal information and booking history.</li>
          <li><strong>Support Ticket:</strong> A request submitted by the user for assistance with an issue.</li>
        </ul>
      </div>

      <div className="section">
        <h2>2. Legal Information</h2>
        <p>The following are important legal aspects related to using the SeeMyTrip platform:</p>
        <ul>
          <li><strong>Terms of Service:</strong> The official agreement between users and SeeMyTrip, outlining the terms for using the platform.</li>
          <li><strong>Privacy Policy:</strong> Information on how SeeMyTrip collects, uses, and protects users' data.</li>
          <li><strong>Refund Policy:</strong> Guidelines on how SeeMyTrip handles cancellations and refunds for bookings.</li>
        </ul>
      </div>

      <div className="section">
        <h2>3. Technical Specifications</h2>
        <p>This section includes technical details and system requirements for optimal performance of the SeeMyTrip platform:</p>
        <ul>
          <li><strong>Supported Browsers:</strong> Chrome, Firefox, Safari, and Edge (latest versions).</li>
          <li><strong>Mobile App Requirements:</strong> Android 10+ and iOS 12+.</li>
          <li><strong>API Integrations:</strong> The platform integrates with various third-party services for payments, notifications, and customer support.</li>
        </ul>
      </div>

      <div className="section">
        <h2>4. Frequently Asked Questions (FAQ)</h2>
        <p>If you need help, you can visit our FAQ section or reach out to support. Below are some common questions:</p>
        <ul>
          <li><strong>Q:</strong> How can I change my booking details? <br /><strong>A:</strong> You can modify your booking by visiting the "My Bookings" section or contacting our support team.</li>
          <li><strong>Q:</strong> What should I do if I don't receive a booking confirmation? <br /><strong>A:</strong> Check your email inbox and spam folder, or contact our customer service for assistance.</li>
          <li><strong>Q:</strong> How do I request a refund? <br /><strong>A:</strong> Follow the steps outlined in our Refund Policy or submit a refund request to support.</li>
        </ul>
      </div>

      <div className="section">
        <h2>5. Contact Information</h2>
        <p>If you need further assistance, please don't hesitate to contact our customer service team. Below are the contact details:</p>
        <ul>
          <li><strong>Email:</strong> support@seemytrip.com</li>
          <li><strong>Phone:</strong> +1 (800) 123-4567</li>
          <li><strong>Live Chat:</strong> Available 24/7 on our website.</li>
        </ul>
      </div>
    </div>
  );
};

export default Appendix;
