import React from 'react';
import '../css/CruiseBooking.css';
import CodeBlock from '../pages/CodeBlock';

// Import images
import CruiseNavigationImage from '../images/Features/cruise_navigation.png';
import CruiseSearchImage from '../images/Features/cruisesearch_image.png';
import SystemRequirementsImage from '../images/Features/cruise_navigation.png';
import CruiseBookingProcessImage from '../images/Features/cruisebookingprocess_image.png';
import CruisePansangerDetailsImage from '../images/Features/cruisepansangerdetails_image.png';
import ContactInformationImage from '../images/Features/cruise_navigation.png';

const CruiseBooking = () => {
  const apiExample = `
GET /api/cruises
{
  "destination": "Bahamas",
  "start_date": "2024-12-20",
  "end_date": "2024-12-25",
  "passengers": 2
}

POST /api/bookings
{
  "cruise_id": 301,
  "passenger_name": "Jane Doe",
  "phone": "123-456-7890",
  "payment_method": "credit_card",
  "card_number": "1234-5678-9876-5432"
}
`;

  return (
    <div className="cruise-booking-doc">
      <h1>Cruise Booking Documentation</h1>

      {/* Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Cruise Booking</strong> section allows users to explore cruise options, book cabins, and manage their cruise reservations. Users can choose destinations, travel dates, cabin types, and additional amenities. Additionally, users can modify or cancel their bookings.
        </p>
        <h3>Main Features:</h3>
        <ul>
          <li><strong>Search Cruises:</strong> Search for cruises by destination, date, and duration.</li>
          <li><strong>Cabin Selection:</strong> Choose cabin types based on preferences and group size.</li>
          <li><strong>Booking Management:</strong> Book, modify, and cancel cruise reservations.</li>
          <li><strong>Payment Integration:</strong> Secure payment gateway integration with industry standards such as PCI-DSS compliance.</li>
          <li><strong>Booking Confirmation:</strong> Receive booking confirmations via email/SMS with advanced templating for personalized communication.</li>
        </ul>
        <img
          src={CruiseNavigationImage}
          alt="Cruise Navigation Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* User Guide */}
      <section>
        <h2>User Guide</h2>
        <h3>Accessing the Cruise Booking Section</h3>
        <p>To access the Cruise Booking section, follow these steps:</p>
        <ol>
          <li>Go to the homepage.</li>
          <li>Click on the “Cruise Booking” option in the navigation menu.</li>
          <li>You will be redirected to the cruise booking page.</li>
        </ol>

        <h3>Searching for Cruises</h3>
        <h4>Step 1: Enter Travel Details</h4>
        <p>Fill out the search form with the following:</p>
        <ul>
          <li><strong>Destination:</strong> Select your desired destination.</li>
          <li><strong>Travel Dates:</strong> Choose the starting and ending dates of your cruise.</li>
          <li><strong>Duration:</strong> Specify the number of days.</li>
        </ul>

        <h4>Step 2: View Available Cruises</h4>
        <p>A list of available cruises will be displayed with details such as cruise line, pricing, and itinerary highlights. Real-time cruise availability is fetched from external cruise providers through RESTful APIs using asynchronous JavaScript for seamless user experience.</p>

        <h4>Step 3: Select a Cruise</h4>
        <p>Choose a cruise based on your preferences, budget, and available amenities. The search results are dynamically filtered using client-side JavaScript, allowing users to quickly refine their options based on various criteria like cabin type, price range, and availability.</p>
        <img
          src={CruiseSearchImage}
          alt="Cruise Search Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Booking Cruises */}
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
        <img
          src={CruisePansangerDetailsImage}
          alt="Contact Information Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
        <h4>Step 2: Select Cabin Preferences</h4>
        <p>Choose a cabin type (e.g., Interior, Ocean View, Balcony, or Suite) and specify the number of cabins required. The cabin selection module is implemented using a responsive design that adjusts to various screen sizes, providing a seamless experience on both desktop and mobile devices.</p>

        <h4>Step 3: Payment</h4>
        <p>Complete the payment using Credit Card, Debit Card, Net Banking, or Digital Wallets. The payment system is integrated with secure gateways such as Stripe and PayPal, ensuring all transactions are processed in compliance with industry standards, including SSL encryption and 3D Secure authentication.</p>

        <h4>Step 4: Booking Confirmation</h4>
        <p>Receive confirmation via email or SMS with your booking details and itinerary. This process is automated through backend server-side scripting (Node.js) and asynchronous messaging systems (e.g., SendGrid for emails, Twilio for SMS). The confirmation process ensures that all data is securely stored and easily accessible for future reference.</p>
      </section>

      {/* Managing Bookings */}
      <img
          src={CruiseBookingProcessImage}
          alt="Contact Information Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      <section>
        <h2>Managing Bookings</h2>
        <h4>View Bookings</h4>
        <p>Users can view their current bookings in the “My Cruises” section. The booking system is integrated with a relational database (MySQL), and uses SQL queries for efficient retrieval of user data based on their unique identifiers. For instance, a typical query to fetch a user's booking might look like:</p>
        <CodeBlock language="sql" code={`
SELECT * FROM bookings WHERE user_id = ?;
`} />
        <h4>Cancel or Modify Bookings</h4>
        <p>Bookings can be canceled or modified based on the cruise company’s policies. Changes are reflected in real-time, thanks to the backend implementation of RESTful APIs that interact with the database to update booking statuses. For instance, modifying a booking could look like:</p>
        <CodeBlock language="sql" code={`
UPDATE bookings
SET cabin_type = 'Ocean View', passenger_count = 3
WHERE booking_id = ?;
`} />
        <h4>Cancellation Policies</h4>
        <ul>
          <li>Free cancellation up to 48 hours after booking.</li>
          <li>Partial refund based on the time left before departure. Refunds are processed through the payment gateway APIs.</li>
        </ul>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2>Technical Specifications</h2>
        <h3>Supported Browsers</h3>
        <ul>
          <li>Google Chrome (latest stable release)</li>
          <li>Mozilla Firefox (latest stable release)</li>
          <li>Microsoft Edge (latest stable release)</li>
          <li>Safari (for macOS/iOS, latest stable release)</li>
        </ul>

        <h3>System Requirements</h3>
        <ul>
          <li><strong>Desktop/Laptop:</strong> Windows 10 or higher, macOS 10.15 or higher</li>
          <li><strong>Mobile Devices:</strong> iOS 12 or higher, Android 10 or higher</li>
        </ul>

        <h3>Integrations</h3>
        <ul>
          <li><strong>Payment Gateway:</strong> Integrated with Stripe and PayPal. Both services are integrated using their SDKs to process payments securely and handle user data. Payment information is encrypted using AES-256 encryption before transmission.</li>
          <li><strong>Cruise Availability:</strong> Real-time availability fetched from cruise line services via a RESTful API. These external APIs are called asynchronously to ensure minimal latency and a seamless user experience during search and booking processes.</li>
        </ul>
        {/* <img
          src={SystemRequirementsImage}
          alt="System Requirements Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
      </section>

      {/* API Documentation */}
      <section>
        <h2>API Documentation (For Developers)</h2>
        <p>Here are the API endpoints used for cruise bookings:</p>
        <CodeBlock language="json" code={apiExample} />
        <h3>Endpoints:</h3>
        <ul>
          <li><strong>GET /api/cruises:</strong> Fetch a list of available cruises based on destination, dates, and passenger count.</li>
          <li><strong>POST /api/bookings:</strong> Submit a booking request with user information and payment details.</li>
        </ul>

        <h3>Error Handling</h3>
        <p>All API responses include status codes and detailed error messages for debugging and user feedback. For example, if a booking fails due to incorrect payment details, the response might be:</p>
        <CodeBlock language="json" code={`
{
  "status": "error",
  "message": "Payment failed due to invalid card details.",
  "code": "400"
}
`} />
      </section>

      {/* Contact Information */}
      <section>
        <h2>Contact Information</h2>
        <p>If you need further assistance, feel free to reach out to our support team. We provide 24/7 customer service for all booking-related inquiries.</p>
        <ul>
          <li><strong>Email:</strong> support@cruisebooking.com</li>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Live Chat:</strong> Available on our website during business hours</li>
        </ul>
        {/* <img
          src={ContactInformationImage}
          alt="Contact Information Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
      </section>
    </div>
  );
};

export default CruiseBooking;
