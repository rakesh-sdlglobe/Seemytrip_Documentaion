import React from 'react';
import '../css/Availability.css';

const Availability = () => {
  return (
    <div className="availability-container">
      <h1>24/7 Availability</h1>

      <section>
        <h2>Always Here for You</h2>
        <p>
          We understand that your needs don't follow a 9-to-5 schedule. That’s why our services are available <strong>24 hours a day, 7 days a week</strong>. 
          Whether you need assistance, want to make a booking, or have a question, we are always ready to help.
        </p>
      </section>

      <section>
        <h2>Key Benefits of Our 24/7 Service</h2>
        <ul>
          <li><strong>Round-the-Clock Support:</strong> Our customer service team is here to assist you anytime, day or night.</li>
          <li><strong>Global Accessibility:</strong> Time zones don’t matter – we’re here for you wherever you are.</li>
          <li><strong>Quick Response Times:</strong> Immediate assistance for any urgent needs or last-minute changes.</li>
          <li><strong>Seamless Experience:</strong> Make bookings, manage reservations, or resolve issues at your convenience.</li>
        </ul>
      </section>

      <section>
        <h2>How to Reach Us</h2>
        <p>
          Contact us through any of the following channels, available 24/7:
        </p>
        <ul>
          <li><strong>Live Chat:</strong> Accessible via our website or mobile app.</li>
          <li><strong>Email:</strong> Send your queries to <a href="mailto:support@example.com">support@example.com</a>.</li>
          <li><strong>Phone:</strong> Call us at <strong>+1-800-123-4567</strong> for immediate assistance.</li>
          <li><strong>Help Center:</strong> Visit our online Help Center for FAQs and self-service options.</li>
        </ul>
      </section>

      <section>
        <h2>Why 24/7 Matters</h2>
        <p>
          Life doesn’t pause, and neither do we. Our 24/7 availability ensures you have a reliable partner for your travel, bookings, and support needs, no matter the time or place. Your convenience and satisfaction are our top priorities.
        </p>
      </section>
    </div>
  );
};

export default Availability;
