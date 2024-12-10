import React from 'react';
import '../css/Troubleshooting.css';

const Troubleshooting = () => {
  return (
    <div className="troubleshooting-container">
      <h1>Troubleshooting Guide</h1>
      <p>If you're experiencing any issues with SeeMyTrip, follow these troubleshooting steps to resolve the most common problems. If you need further assistance, feel free to reach out to our support team.</p>

      <div className="issue-section">
        <h2>1. Problem: Unable to Log In</h2>
        <p>If you're having trouble logging in, please try the following:</p>
        <ul>
          <li>Ensure you're using the correct username and password.</li>
          <li>Check your internet connection and try again.</li>
          <li>Clear your browser cache or app data and try logging in again.</li>
          <li>If you've forgotten your password, click on "Forgot Password" to reset it.</li>
        </ul>
      </div>

      <div className="issue-section">
        <h2>2. Problem: Payment Issues</h2>
        <p>If your payment isn't going through, try the following troubleshooting steps:</p>
        <ul>
          <li>Ensure that your payment method is valid and has sufficient funds.</li>
          <li>Check if your internet connection is stable during the payment process.</li>
          <li>Clear your browser cache or try using a different payment method.</li>
          <li>If the issue persists, contact our support team for assistance.</li>
        </ul>
      </div>

      <div className="issue-section">
        <h2>3. Problem: Booking Confirmation Not Received</h2>
        <p>If you haven't received your booking confirmation email or notification:</p>
        <ul>
          <li>Double-check the email address you used for booking and make sure it is correct.</li>
          <li>Check your spam or junk folder in case the email was mistakenly marked as spam.</li>
          <li>Verify that your booking was successfully completed by checking your "My Bookings" page.</li>
          <li>If you still haven’t received it, please contact support for a confirmation email resend.</li>
        </ul>
      </div>

      <div className="issue-section">
        <h2>4. Problem: App Crashes or Freezes</h2>
        <p>If the app is crashing or freezing, try the following steps:</p>
        <ul>
          <li>Ensure that your app is updated to the latest version from the app store.</li>
          <li>Restart the app and try using it again.</li>
          <li>If the problem continues, try uninstalling and reinstalling the app.</li>
          <li>Make sure your device's operating system is up to date.</li>
        </ul>
      </div>

      <div className="issue-section">
        <h2>5. Problem: Missing or Incorrect Data</h2>
        <p>If you notice that some of your data is missing or incorrect, follow these steps:</p>
        <ul>
          <li>Ensure that you've entered your details correctly in the booking or profile section.</li>
          <li>If the issue is with your booking details, contact our support team with your booking ID for correction.</li>
          <li>If it’s related to payment data, make sure the payment was successfully processed on your end.</li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Still Need Help?</h2>
        <p>If you are still facing issues, feel free to contact our customer support team:</p>
        <p>Email: <strong>support@seemytrip.com</strong></p>
        <p>Phone: <strong>+1 (800) 123-4567</strong></p>
        <p>Our team is available 24/7 and will get back to you as soon as possible.</p>
      </div>
    </div>
  );
};

export default Troubleshooting;
