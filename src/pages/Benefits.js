import React from 'react';
import '../css/Benefits.css';

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h1>Benefits of Using SeeMyTrip</h1>
      <p>SeeMyTrip is your one-stop travel platform designed to make booking travel easier, faster, and more enjoyable. Here are some key benefits:</p>

      <div className="benefits-list">
        <div className="benefit-item">
          <h2>1. Easy and Quick Booking</h2>
          <p>Booking your trip with SeeMyTrip is simple and fast. With just a few clicks, you can book your flights, hotels, and more, all from one platform.</p>
        </div>

        <div className="benefit-item">
          <h2>2. 24/7 Customer Support</h2>
          <p>Our dedicated customer support team is available around the clock to assist you with any booking or travel issues. We're always here to help!</p>
        </div>

        <div className="benefit-item">
          <h2>3. Wide Range of Options</h2>
          <p>Choose from a variety of travel services, including flights, hotels, buses, and car rentals. We offer the best options to suit your needs and budget.</p>
        </div>

        <div className="benefit-item">
          <h2>4. Secure Payments</h2>
          <p>We ensure your transactions are safe and secure, so you can pay with confidence knowing your personal data is protected.</p>
        </div>

        <div className="benefit-item">
          <h2>5. Personalized Recommendations</h2>
          <p>Get personalized travel suggestions based on your preferences and previous trips. Our platform learns what you like to provide better options each time.</p>
        </div>

        <div className="benefit-item">
          <h2>6. Exclusive Deals & Offers</h2>
          <p>Enjoy exclusive discounts and offers only available to SeeMyTrip users. We bring you the best deals to make your travels affordable.</p>
        </div>

        <div className="benefit-item">
          <h2>7. Travel History & Management</h2>
          <p>Easily manage your bookings, track your travel history, and view your upcoming trips all in one place. Stay organized and on top of your travel plans.</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
