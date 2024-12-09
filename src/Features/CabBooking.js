import React from 'react';
import '../css/CabBooking.css';

const CabBooking = () => {
  return (
    <div className="cab-booking-doc">
      <h1>Cab Booking Documentation</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Cab Booking</strong> section allows users to search for available cabs, book rides, and manage their cab reservations.
          Users can choose pick-up locations, drop-off locations, select vehicle types, and complete bookings. Additionally, users can modify or cancel their bookings.
        </p>
        <h3>Main Features:</h3>
        <ul>
          <li><strong>Search Cabs:</strong> Search for cabs by location, date, and time.</li>
          <li><strong>Vehicle Selection:</strong> Choose vehicle types based on the number of passengers.</li>
          <li><strong>Booking Management:</strong> Book, modify, and cancel cab rides.</li>
          <li><strong>Payment Integration:</strong> Secure payment gateway.</li>
          <li><strong>Booking Confirmation:</strong> Receive confirmation via email or SMS.</li>
        </ul>
      </section>

      <section>
        <h2>User Guide</h2>
        <h3>Accessing the Cab Booking Section</h3>
        <p>To access the Cab Booking section:</p>
        <ol>
          <li>Go to the homepage.</li>
          <li>Click on the “Cab Booking” option in the navigation menu.</li>
          <li>You will be redirected to the cab booking page.</li>
        </ol>

        <h3>Searching for Cabs</h3>
        <h4>Step 1: Enter Travel Details</h4>
        <p>Fill out the search form with:</p>
        <ul>
          <li><strong>Pick-up Location:</strong> Select the starting location.</li>
          <li><strong>Drop-off Location:</strong> Choose the destination.</li>
          <li><strong>Date and Time:</strong> Select your travel date and time.</li>
        </ul>

        <h4>Step 2: View Available Cabs</h4>
        <p>A list of available cabs will be displayed with details like vehicle type, pricing, and estimated time of arrival.</p>

        <h4>Step 3: Select Vehicle Type</h4>
        <p>Choose the type of vehicle based on your preferences and the number of passengers.</p>
      </section>

      <section>
        <h2>Booking Cabs</h2>
        <h4>Step 1: Provide Passenger Information</h4>
        <ul>
          <li><strong>Full Name</strong></li>
          <li><strong>Email Address</strong></li>
          <li><strong>Phone Number</strong></li>
          <li><strong>Special Requests (Optional)</strong></li>
        </ul>

        <h4>Step 2: Select Vehicle Preferences</h4>
        <p>Choose the vehicle that suits your needs.</p>

        <h4>Step 3: Payment</h4>
        <p>Complete the payment using various methods like Credit Card, Debit Card, Net Banking, or Digital Wallets.</p>

        <h4>Step 4: Booking Confirmation</h4>
        <p>Receive confirmation via email or SMS with booking details.</p>
      </section>

      <section>
        <h2>Managing Bookings</h2>
        <h4>View Bookings</h4>
        <p>Users can view their current bookings in the “My Bookings” section.</p>

        <h4>Cancel or Modify Bookings</h4>
        <p>Bookings can be canceled or modified based on the cancellation policies.</p>

        <h4>Cancellation Policies</h4>
        <ul>
          <li>Free cancellation within 30 minutes of booking.</li>
          <li>Partial refund after 30 minutes, based on the cab company policy.</li>
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
          <li><strong>Cab Availability:</strong> Real-time availability fetched from third-party services like Uber or Lyft.</li>
        </ul>
      </section>

      <section>
        <h2>API Documentation (For Developers)</h2>
        <h4>GET /api/cabs</h4>
        <pre>
          <code>
            {JSON.stringify({
              "pickup_location": "New York",
              "dropoff_location": "JFK Airport",
              "pickup_time": "2024-12-20T15:00:00",
              "passengers": 2
            })}
          </code>
        </pre>

        <h4>POST /api/bookings</h4>
        <pre>
          <code>
            {JSON.stringify({
              "cab_id": 101,
              "passenger_name": "John Doe",
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
          <li><strong>Payment Failures:</strong> Check for issues with your card or payment method.</li>
          <li><strong>Booking Errors:</strong> Try clearing your browser cache or use a different device.</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <h4>Q1: How do I cancel my cab booking?</h4>
        <p>Go to the “My Bookings” section to cancel the booking.</p>

        <h4>Q2: Can I change the pickup location?</h4>
        <p>Yes, changes can be made depending on availability and policies.</p>

        <h4>Q3: Will I get a refund if I cancel my booking?</h4>
        <p>Refunds depend on the cancellation policy of the service provider.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p><strong>Customer Support:</strong></p>
        <ul>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Email:</strong> support@cabbooking.com</li>
          <li><strong>Live Chat:</strong> Available on the website</li>
        </ul>
      </section>
    </div>
  );
};

export default CabBooking;
