import React from 'react';
import '../css/BusBooking.css';

const BusBooking = () => {
  return (
    <div className="bus-booking-doc">
      <h1>Bus Booking Documentation</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Bus Booking</strong> section enables users to search for available buses, book tickets, and manage their bookings.
          Users can choose pick-up and drop-off locations, travel dates, and seat preferences to complete their bookings. Additionally, users can modify or cancel bookings as needed.
        </p>
        <h3>Main Features:</h3>
        <ul>
          <li><strong>Search Buses:</strong> Find buses by location, date, and time.</li>
          <li><strong>Seat Selection:</strong> Choose preferred seats based on availability.</li>
          <li><strong>Booking Management:</strong> Book, modify, and cancel bus tickets.</li>
          <li><strong>Payment Integration:</strong> Secure and seamless payment options.</li>
          <li><strong>Booking Confirmation:</strong> Receive confirmation via email or SMS.</li>
        </ul>
      </section>

      <section>
        <h2>User Guide</h2>
        <h3>Accessing the Bus Booking Section</h3>
        <p>To access the Bus Booking section:</p>
        <ol>
          <li>Go to the homepage.</li>
          <li>Click on the “Bus Booking” option in the navigation menu.</li>
          <li>You will be redirected to the bus booking page.</li>
        </ol>

        <h3>Searching for Buses</h3>
        <h4>Step 1: Enter Travel Details</h4>
        <p>Fill out the search form with:</p>
        <ul>
          <li><strong>Pick-up Location:</strong> Select the departure location.</li>
          <li><strong>Drop-off Location:</strong> Choose the destination.</li>
          <li><strong>Date and Time:</strong> Select your travel date and time.</li>
        </ul>

        <h4>Step 2: View Available Buses</h4>
        <p>A list of available buses will be displayed with details like bus operator, departure time, fare, and seat availability.</p>

        <h4>Step 3: Select Seats</h4>
        <p>Choose your preferred seats based on availability and preferences (e.g., window or aisle seats).</p>
      </section>

      <section>
        <h2>Booking Buses</h2>
        <h4>Step 1: Provide Passenger Information</h4>
        <ul>
          <li><strong>Full Name</strong></li>
          <li><strong>Email Address</strong></li>
          <li><strong>Phone Number</strong></li>
          <li><strong>Special Requests (Optional)</strong></li>
        </ul>

        <h4>Step 2: Review Booking Details</h4>
        <p>Verify your travel details, including seat number, bus operator, and total fare.</p>

        <h4>Step 3: Payment</h4>
        <p>Complete the payment using various methods such as Credit Card, Debit Card, Net Banking, or Digital Wallets.</p>

        <h4>Step 4: Booking Confirmation</h4>
        <p>Receive confirmation via email or SMS with booking details and seat numbers.</p>
      </section>

      <section>
        <h2>Managing Bookings</h2>
        <h4>View Bookings</h4>
        <p>Users can view their current bookings in the “My Bookings” section.</p>

        <h4>Cancel or Modify Bookings</h4>
        <p>Bookings can be canceled or modified based on the cancellation policies.</p>

        <h4>Cancellation Policies</h4>
        <ul>
          <li>Free cancellation within 24 hours of booking.</li>
          <li>Partial refund after 24 hours, based on the bus operator's policy.</li>
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
          <li><strong>Bus Availability:</strong> Real-time availability fetched from third-party services.</li>
        </ul>
      </section>

      <section>
        <h2>API Documentation (For Developers)</h2>
        <h4>GET /api/buses</h4>
        <pre>
          <code>
            {JSON.stringify({
              "pickup_location": "Los Angeles",
              "dropoff_location": "San Francisco",
              "travel_date": "2024-12-25",
              "passengers": 3
            })}
          </code>
        </pre>

        <h4>POST /api/bookings</h4>
        <pre>
          <code>
            {JSON.stringify({
              "bus_id": 205,
              "passenger_name": "Jane Smith",
              "phone": "555-789-1234",
              "payment_method": "digital_wallet",
              "seat_numbers": ["A1", "A2"]
            })}
          </code>
        </pre>
      </section>

      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li><strong>Payment Failures:</strong> Verify your payment details or try a different payment method.</li>
          <li><strong>Booking Errors:</strong> Clear your browser cache or use a different device.</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <h4>Q1: How do I cancel my bus booking?</h4>
        <p>Go to the “My Bookings” section to cancel your booking.</p>

        <h4>Q2: Can I choose specific seats?</h4>
        <p>Yes, seat selection is available during the booking process.</p>

        <h4>Q3: Will I get a refund if I cancel my booking?</h4>
        <p>Refunds depend on the cancellation policy of the bus operator.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p><strong>Customer Support:</strong></p>
        <ul>
          <li><strong>Phone:</strong> +1-800-234-5678</li>
          <li><strong>Email:</strong> support@busbooking.com</li>
          <li><strong>Live Chat:</strong> Available on the website</li>
        </ul>
      </section>
    </div>
  );
};

export default BusBooking;
