import React from "react";
import "../css/CabBooking.css";
import CodeBlock from "../pages/CodeBlock";

// Import images
import CabNavigationImage from "../images/Features/cab_navigation.png";
import CabSearchImage from "../images/Features/cabsearch_image.png";
import CabBookingImage from "../images/Features/cabbooking_image.png";
import SystemRequirementsImage from "../images/Features/cab_navigation.png";
import ContactInformationImage from "../images/Features/cab_navigation.png";

const CabBooking = () => {
  const apiExample = `
GET /api/cabs
{
  "pickup_location": "New York",
  "dropoff_location": "JFK Airport",
  "pickup_time": "2024-12-20T15:00:00",
  "passengers": 2
}

POST /api/bookings
{
  "cab_id": 101,
  "passenger_name": "John Doe",
  "phone": "123-456-7890",
  "payment_method": "credit_card",
  "card_number": "1234-5678-9876-5432"
}
`;

  return (
    <div className="cab-booking-doc">
      <h1>Cab Booking Documentation</h1>

      {/* Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Cab Booking</strong> section allows users to search for
          available cabs, book rides, and manage their reservations. This system
          streamlines the process of selecting a pick-up location, drop-off
          location, and vehicle type while providing seamless booking and payment options.
        </p>
        <img
          src={CabNavigationImage}
          alt="Cab Navigation Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* User Guide */}
      <section>
        <h2>User Guide</h2>
        <h3>Accessing the Cab Booking Section</h3>
        <p>To access the Cab Booking section, navigate to:</p>
        <ol>
          <li>The homepage menu.</li>
          <li>Click on the “Cab Booking” option.</li>
        </ol>

        <h3>Searching for Cabs</h3>
        <ol>
          <li>
            <strong>Enter Travel Details:</strong> Specify pick-up and drop-off
            locations, travel date, and time.
          </li>
          <li>
            <strong>View Available Cabs:</strong> A list of available cabs will
            be displayed with details like type, pricing, and estimated arrival time.
          </li>
          <li>
            <strong>Select Vehicle Type:</strong> Choose a vehicle based on your
            preferences and the number of passengers.
          </li>
        </ol>
        <img
          src={CabSearchImage}
          alt="Cab Search Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Booking Cabs */}
      <section>
        <h2>Booking Cabs</h2>
        <ol>
          <li>
            <strong>Provide Passenger Information:</strong> Enter full name,
            email, phone number, and optional requests.
          </li>
          <li>
            <strong>Vehicle Preferences:</strong> Choose the most suitable vehicle for your trip.
          </li>
          <li>
            <strong>Complete Payment:</strong> Use secure methods like credit cards, debit cards, or digital wallets.
          </li>
          <li>
            <strong>Receive Confirmation:</strong> Confirmation is sent via email or SMS.
          </li>
        </ol>
      </section>
      <img
          src={CabBookingImage}
          alt="Cab Search Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      {/* Managing Bookings */}
      <section>
        <h2>Managing Bookings</h2>
        <h4>Viewing, Modifying, and Cancelling</h4>
        <p>
          Navigate to “My Bookings” to view your reservations, modify details, or
          cancel the booking.
        </p>
        <ul>
          <li>Free cancellation is allowed within 30 minutes of booking.</li>
          <li>
            Refunds depend on the cancellation policies of the cab service
            provider.
          </li>
        </ul>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2>Technical Specifications</h2>
        <ul>
          <li>
            <strong>Browsers Supported:</strong> Chrome, Firefox, Safari, Edge.
          </li>
          <li>
            <strong>System Requirements:</strong> Works on desktops, laptops,
            and mobile devices with modern browsers.
          </li>
          <li>
            <strong>Payment Gateways:</strong> Stripe, PayPal integration.
          </li>
        </ul>
        {/* <img
          src={SystemRequirementsImage}
          alt="System Requirements Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
      </section>

      {/* Code Snippet Example */}
      <section>
        <h2>API Code Example</h2>
        <p>Here is an example of the API endpoints used for cab bookings:</p>
        <CodeBlock language="json" code={apiExample} />
      </section>

      {/* Troubleshooting */}
      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li>
            <strong>Payment Failures:</strong> Verify payment details and ensure
            a stable internet connection.
          </li>
          <li>
            <strong>Booking Errors:</strong> Refresh the page or clear browser cache.
          </li>
        </ul>
      </section>

      {/* FAQs */}
      <section>
        <h2>FAQs</h2>
        <ul>
          <li>
            <strong>Q:</strong> Can I cancel a cab booking?<br />
            <strong>A:</strong> Yes, use the “My Bookings” section to cancel or
            modify.
          </li>
          <li>
            <strong>Q:</strong> How will I receive a refund?<br />
            <strong>A:</strong> Refunds are processed to the original payment
            method.
          </li>
        </ul>
      </section>

      {/* Contact Information */}
      <section>
        <h2>Contact Information</h2>
        <p>
          For support, reach out via:
          <ul>
            <li>Phone: +1-800-123-4567</li>
            <li>Email: support@cabbooking.com</li>
            <li>Live Chat: Available on the website</li>
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

export default CabBooking;
