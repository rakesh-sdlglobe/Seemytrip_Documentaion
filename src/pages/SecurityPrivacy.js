import React from 'react';
import '../css/SecurityPolicy.css';

const SecurityPolicy = () => {
  return (
    <div className="security-policy-container">
      <h1>Security and Data Policy</h1>
      <p>Your privacy and security are our top priorities. At SeeMyTrip, we are committed to ensuring that your personal data is safe, protected, and handled with the utmost care. Below is an overview of our security and data policy:</p>

      <div className="policy-section">
        <h2>1. Data Collection</h2>
        <p>We collect personal information to provide better services to you. This includes your name, email address, phone number, payment details, and travel preferences. We may also collect non-personal information such as browser details and usage patterns to improve our services.</p>
      </div>

      <div className="policy-section">
        <h2>2. Data Protection</h2>
        <p>Your data is protected using advanced encryption technologies and secure storage systems. We implement industry-standard security protocols to prevent unauthorized access, disclosure, or alteration of your personal information.</p>
      </div>

      <div className="policy-section">
        <h2>3. Third-Party Sharing</h2>
        <p>We do not share your personal information with third parties, except when necessary to process transactions or provide you with services (e.g., payment processing, booking confirmations). We ensure that any third-party providers follow strict security standards to protect your data.</p>
      </div>

      <div className="policy-section">
        <h2>4. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to enhance your user experience. Cookies help us understand your preferences, personalize content, and remember your login details. You can control cookie settings through your browser preferences.</p>
      </div>

      <div className="policy-section">
        <h2>5. User Rights</h2>
        <p>You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact our support team. We are committed to responding to all requests in a timely manner.</p>
      </div>

      <div className="policy-section">
        <h2>6. Data Retention</h2>
        <p>We will retain your personal data for as long as necessary to fulfill the purposes for which it was collected or as required by law. Once it is no longer needed, we will securely delete or anonymize it.</p>
      </div>

      <div className="policy-section">
        <h2>7. Security Breach Notification</h2>
        <p>In the unlikely event of a data breach, we will promptly notify affected users and take immediate action to mitigate the effects. We are committed to transparency and will inform you of any potential risks to your personal data.</p>
      </div>

      <div className="policy-section">
        <h2>8. Changes to the Policy</h2>
        <p>We may update this policy from time to time to reflect changes in our practices or applicable laws. Any changes will be posted on this page, and the date of the most recent update will be displayed.</p>
      </div>

      <div className="policy-section">
        <h2>9. Contact Us</h2>
        <p>If you have any questions or concerns regarding our security and data policy, feel free to reach out to our support team at <strong>support@seemytrip.com</strong>.</p>
      </div>
    </div>
  );
};

export default SecurityPolicy;
