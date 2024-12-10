import React from 'react';
import '../css/BookingConfirmation.css';

const BookingConfirmation = () => {
  return (
    <div className="booking-confirmation-container">
      <h1>Booking Confirmation</h1>
      <section>
        <h2>Your Booking is Confirmed!</h2>
        <p>
          Thank you for choosing our services. We are pleased to confirm your booking. Please review the details of your booking below:
        </p>
        <div className="booking-details">
          <ul>
            <li><strong>Booking Reference:</strong> #123456789</li>
            <li><strong>Booking Date:</strong> 2024-12-10</li>
            <li><strong>Service/Product:</strong> Luxury Hotel Stay (3 nights)</li>
            <li><strong>Check-in Date:</strong> 2024-12-15</li>
            <li><strong>Check-out Date:</strong> 2024-12-18</li>
            <li><strong>Amount Paid:</strong> $450.00</li>
            <li><strong>Payment Method:</strong> Credit Card (Visa)</li>
          </ul>
        </div>
        <p>
          You will receive a confirmation email with all the details of your booking. Please check your inbox for further instructions or additional information.
        </p>
      </section>

      <section>
        <h2>Booking Updates</h2>
        <p>
          You can update or manage your booking at any time through our platform. The following options are available for you:
        </p>
        <ul>
          <li><strong>Modify Your Booking:</strong> If you need to change your check-in/check-out dates or other details, please log in to your account and select the "Modify Booking" option.</li>
          <li><strong>Cancel Your Booking:</strong> In case your plans change, you can cancel your booking up to 24 hours before your scheduled check-in date. Please review our cancellation policy for more details.</li>
          <li><strong>Request Additional Services:</strong> You can add services like breakfast, late check-out, or room upgrades by contacting our support team or through the user dashboard.</li>
        </ul>
      </section>

      <section>
        <h2>How to Update Your Booking</h2>
        <p>
          To update or modify your booking, follow these simple steps:
        </p>
        <ol>
          <li><strong>Login to Your Account:</strong> Go to our website and log into your account with the email and password used during booking.</li>
          <li><strong>Navigate to My Bookings:</strong> Once logged in, go to the "My Bookings" section where you can see all your confirmed bookings.</li>
          <li><strong>Select Your Booking:</strong> Click on the booking you would like to update or modify.</li>
          <li><strong>Make Changes:</strong> Update your booking details, such as dates, services, or room preferences.</li>
          <li><strong>Submit Changes:</strong> After making changes, click the "Submit Changes" button to confirm the update.</li>
        </ol>
      </section>

      <section>
        <h2>Booking Cancellation</h2>
        <p>
          If you need to cancel your booking, you can do so by following these steps:
        </p>
        <ul>
          <li><strong>Log In:</strong> Access your account and navigate to the "My Bookings" section.</li>
          <li><strong>Find Your Booking:</strong> Locate the booking you wish to cancel.</li>
          <li><strong>Click Cancel:</strong> Select the "Cancel Booking" option and follow the instructions.</li>
          <li><strong>Review Cancellation Policy:</strong> Make sure you understand any cancellation fees or terms before finalizing the cancellation.</li>
        </ul>
        <p>
          For any issues or assistance with cancellations, please contact our support team at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.
        </p>
      </section>

      <section>
        <h2>Booking Confirmation Email</h2>
        <p>
          After successfully completing your booking, you will receive a confirmation email with the following information:
        </p>
        <ul>
          <li><strong>Booking Reference Number:</strong> A unique identifier for your booking.</li>
          <li><strong>Booking Details:</strong> Your service/product, dates, and payment information.</li>
          <li><strong>Booking Terms:</strong> A link to the terms and conditions of your booking.</li>
          <li><strong>Contact Information:</strong> Details on how to contact us if you have any questions or need assistance.</li>
        </ul>
        <p>
          Please keep your booking reference number for future reference. You can use it to check your booking status or manage your booking.
        </p>
      </section>

      <section>
        <h2>Need Assistance?</h2>
        <p>
          If you need help with your booking or any changes, our customer support team is available to assist you:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></li>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Live Chat:</strong> Available on the bottom-right corner of the page for immediate assistance.</li>
        </ul>
      </section>
    </div>
  );
};

export default BookingConfirmation;
