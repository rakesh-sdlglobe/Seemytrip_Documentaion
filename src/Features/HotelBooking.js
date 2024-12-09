import React from 'react';
import '../css/HotelBooking.css';

const HotelBooking = () => {
  return (
    <div className="hotel-booking-doc">
      <h1>Hotel Booking Documentation</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Hotel Booking</strong> section allows users to search for, book, and manage their hotel reservations.
          Users can find available hotels, select room types, and complete bookings. Additionally, they can modify or cancel bookings.
        </p>
        <h3>Main Features:</h3>
        <ul>
          <li><strong>Search Hotels:</strong> Search for hotels by location, dates, and guests.</li>
          <li><strong>Room Selection:</strong> Choose room types with pricing information.</li>
          <li><strong>Booking Management:</strong> Book, modify, and cancel hotel bookings.</li>
          <li><strong>Payment Integration:</strong> Secure payment gateway.</li>
          <li><strong>Booking Confirmation:</strong> Receive confirmation via email or SMS.</li>
        </ul>
      </section>

      <section>
        <h2>User Guide</h2>
        <h3>Accessing the Hotel Booking Section</h3>
        <p>To access the Hotel Booking section:</p>
        <ol>
          <li>Go to the homepage.</li>
          <li>Click on the “Hotel Booking” option in the navigation menu.</li>
          <li>You will be redirected to the hotel booking page.</li>
        </ol>

        <h3>Searching for Hotels</h3>
        <h4>Step 1: Enter Travel Details</h4>
        <p>Fill out the search form with:</p>
        <ul>
          <li><strong>Destination:</strong> Select the location.</li>
          <li><strong>Check-in/Check-out Dates:</strong> Choose your stay dates.</li>
          <li><strong>Number of Guests:</strong> Select the number of guests.</li>
        </ul>

        <h4>Step 2: View Available Hotels</h4>
        <p>A list of hotels will be shown with details like hotel name, location, room types, and price per night.</p>

        <h4>Step 3: Select Room Type</h4>
        <p>Choose a room type and check pricing.</p>
      </section>

      <section>
        <h2>Booking Hotel Rooms</h2>
        <h4>Step 1: Provide Guest Information</h4>
        <ul>
          <li><strong>Full Name</strong></li>
          <li><strong>Email Address</strong></li>
          <li><strong>Phone Number</strong></li>
          <li><strong>Special Requests (Optional)</strong></li>
        </ul>

        <h4>Step 2: Select Room Preferences</h4>
        <p>Choose your room and review amenities.</p>

        <h4>Step 3: Payment</h4>
        <p>Complete payment using methods like Credit Card, Debit Card, Net Banking, or Digital Wallets.</p>

        <h4>Step 4: Booking Confirmation</h4>
        <p>Receive booking confirmation via email or SMS.</p>
      </section>

      <section>
        <h2>Managing Bookings</h2>
        <h4>View Bookings</h4>
        <p>Users can view existing bookings in the “My Bookings” section.</p>

        <h4>Cancel or Modify Bookings</h4>
        <p>Bookings can be canceled or modified, subject to hotel policies.</p>

        <h4>Cancellation Policies</h4>
        <ul>
          <li>Free cancellation within 24 hours of booking.</li>
          <li>Partial refund after 24 hours, depending on the hotel's policy.</li>
        </ul>
      </section>

      <section>
        <h2>Technical Specifications</h2>
        <h3>Supported Browsers</h3>
        <ul>
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Microsoft Edge</li>
          <li>Safari (for macOS/iOS)</li>
        </ul>

        <h3>System Requirements</h3>
        <ul>
          <li><strong>Desktop/Laptop:</strong> Windows 10 or higher, macOS</li>
          <li><strong>Mobile Devices:</strong> iOS 12 or higher, Android 10 or higher</li>
        </ul>

        <h3>Integrations</h3>
        <ul>
          <li><strong>Payment Gateway:</strong> Integrated with Stripe and PayPal.</li>
          <li><strong>Hotel Database:</strong> Real-time availability fetched from third-party APIs like Booking.com and Agoda.</li>
        </ul>
      </section>

      <section>
        <h2>API Documentation (For Developers)</h2>
        <h4>GET /api/hotels</h4>
        <pre>
          <code>
            {JSON.stringify({
              location: "Paris",
              check_in: "2024-12-20",
              check_out: "2024-12-25",
              guests: 2
            }, null, 2)}
          </code>
        </pre>

        <h4>POST /api/bookings</h4>
        <pre>
          <code>
            {JSON.stringify({
              hotel_id: 1,
              guest_name: "John Doe",
              email: "johndoe@example.com",
              payment_method: "credit_card",
              card_number: "1234-5678-9876-5432"
            }, null, 2)}
          </code>
        </pre>
      </section>

      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li><strong>Payment Failures:</strong> Check for card issues or try another method.</li>
          <li><strong>Booking Errors:</strong> Clear cache or try a different device.</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <h4>Q1: How do I cancel my booking?</h4>
        <p>Go to the "My Bookings" section to cancel. Check cancellation policy.</p>

        <h4>Q2: Can I change the dates of my booking?</h4>
        <p>Yes, if allowed by the hotel's policy.</p>

        <h4>Q3: Will I get a refund if I cancel?</h4>
        <p>Refunds depend on the cancellation policy.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p><strong>Customer Support:</strong></p>
        <ul>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Email:</strong> support@hotelbooking.com</li>
          <li><strong>Live Chat:</strong> Available on the website</li>
        </ul>
      </section>
    </div>
  );
};

export default HotelBooking;
