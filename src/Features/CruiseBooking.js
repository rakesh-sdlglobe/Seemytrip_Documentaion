import React from 'react';
import '../css/CruiseBooking.css';

const CruiseBooking = () => {
  return (
    <div className="cruise-booking-doc">
      <h1>Cruise Booking Documentation</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Cruise Booking</strong> section allows users to explore cruise options, book cabins, and manage their cruise reservations.
          Users can choose destinations, travel dates, cabin types, and additional amenities. Additionally, users can modify or cancel their bookings.
        </p>
        <h3>Main Features:</h3>
        <ul>
          <li><strong>Search Cruises:</strong> Search for cruises by destination, date, and duration.</li>
          <li><strong>Cabin Selection:</strong> Choose cabin types based on preferences and group size.</li>
          <li><strong>Booking Management:</strong> Book, modify, and cancel cruise reservations.</li>
          <li><strong>Payment Integration:</strong> Secure payment gateway.</li>
          <li><strong>Booking Confirmation:</strong> Receive confirmation via email or SMS.</li>
        </ul>
      </section>

      <section>
        <h2>User Guide</h2>
        <h3>Accessing the Cruise Booking Section</h3>
        <p>To access the Cruise Booking section:</p>
        <ol>
          <li>Go to the homepage.</li>
          <li>Click on the “Cruise Booking” option in the navigation menu.</li>
          <li>You will be redirected to the cruise booking page.</li>
        </ol>

        <h3>Searching for Cruises</h3>
        <h4>Step 1: Enter Travel Details</h4>
        <p>Fill out the search form with:</p>
        <ul>
          <li><strong>Destination:</strong> Select your desired destination.</li>
          <li><strong>Travel Dates:</strong> Choose the starting and ending dates of your cruise.</li>
          <li><strong>Duration:</strong> Specify the number of days.</li>
        </ul>

        <h4>Step 2: View Available Cruises</h4>
        <p>A list of available cruises will be displayed with details like cruise line, pricing, and itinerary highlights.</p>

        <h4>Step 3: Select a Cruise</h4>
        <p>Choose a cruise based on your preferences, budget, and amenities offered.</p>
      </section>

      <section>
        <h2>Booking Cruises</h2>
        <h4>Step 1: Provide Passenger Information</h4>
        <ul>
          <li><strong>Full Name</strong></li>
          <li><strong>Email Address</strong></li>
          <li><strong>Phone Number</strong></li>
          <li><strong>Number of Passengers</strong></li>
          <li><strong>Special Requests (Optional)</strong></li>
        </ul>

        <h4>Step 2: Select Cabin Preferences</h4>
        <p>Choose a cabin type (e.g., Interior, Ocean View, Balcony, or Suite) and specify the number of cabins required.</p>

        <h4>Step 3: Payment</h4>
        <p>Complete the payment using Credit Card, Debit Card, Net Banking, or Digital Wallets.</p>

        <h4>Step 4: Booking Confirmation</h4>
        <p>Receive confirmation via email or SMS with your booking details and itinerary.</p>
      </section>

      <section>
        <h2>Managing Bookings</h2>
        <h4>View Bookings</h4>
        <p>Users can view their current bookings in the “My Cruises” section.</p>

        <h4>Cancel or Modify Bookings</h4>
        <p>Bookings can be canceled or modified based on the cruise company’s policies.</p>

        <h4>Cancellation Policies</h4>
        <ul>
          <li>Free cancellation up to 48 hours after booking.</li>
          <li>Partial refund based on the time left before departure.</li>
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
          <li><strong>Cruise Availability:</strong> Real-time availability fetched from cruise line services.</li>
        </ul>
      </section>

      <section>
        <h2>API Documentation (For Developers)</h2>
        <h4>GET /api/cruises</h4>
        <pre>
          <code>
            {JSON.stringify({
              "destination": "Bahamas",
              "start_date": "2024-12-20",
              "end_date": "2024-12-25",
              "passengers": 2
            })}
          </code>
        </pre>

        <h4>POST /api/bookings</h4>
        <pre>
          <code>
            {JSON.stringify({
              "cruise_id": 301,
              "passenger_name": "Jane Doe",
              "phone": "123-456-7890",
              "payment_method": "credit_card",
              "card_number": "1234-5678-9876-5432"
            })}
          </code>
        </pre>
      </section>

      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li><strong>Payment Failures:</strong> Verify your card details or try a different payment method.</li>
          <li><strong>Booking Errors:</strong> Clear your browser cache or use a different device.</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <h4>Q1: How do I cancel my cruise booking?</h4>
        <p>Go to the “My Cruises” section to cancel the booking.</p>

        <h4>Q2: Can I upgrade my cabin?</h4>
        <p>Yes, cabin upgrades can be requested based on availability.</p>

        <h4>Q3: Will I get a refund if I cancel my booking?</h4>
        <p>Refunds are subject to the cancellation policy of the cruise line.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p><strong>Customer Support:</strong></p>
        <ul>
          <li><strong>Phone:</strong> +1-800-987-6543</li>
          <li><strong>Email:</strong> support@cruisebooking.com</li>
          <li><strong>Live Chat:</strong> Available on the website</li>
        </ul>
      </section>
    </div>
  );
};

export default CruiseBooking;
