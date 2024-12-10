import React from 'react';
import '../css/DataSecurityPrivacy.css';

const DataSecurityPrivacy = () => {
  return (
    <div className="data-security-privacy-container">
      <h1>Data Security and Privacy</h1>

      <section>
        <h2>Overview</h2>
        <p>
          At [Your Company Name], we take data security and privacy very seriously. Our platform is built with robust security measures to ensure that all user data is protected from unauthorized access, breaches, or misuse. We adhere to strict data privacy standards and comply with international laws and regulations to safeguard your information.
        </p>
      </section>

      <section>
        <h2>Security Measures</h2>
        <ul>
          <li><strong>Encryption:</strong> All sensitive data is encrypted in transit using Secure Sockets Layer (SSL) and at rest with strong encryption algorithms.</li>
          <li><strong>Access Control:</strong> Role-based access control ensures that only authorized personnel can access critical systems and data.</li>
          <li><strong>Two-Factor Authentication:</strong> Our platform supports two-factor authentication (2FA) to add an extra layer of security to your account.</li>
          <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments to identify and mitigate potential risks.</li>
          <li><strong>Firewalls and Intrusion Detection:</strong> Advanced firewalls and intrusion detection systems are deployed to protect against unauthorized access and cyber threats.</li>
        </ul>
      </section>

      <section>
        <h2>Data Privacy Commitment</h2>
        <p>
          We are committed to maintaining the privacy of your data. Our privacy practices are designed to ensure compliance with applicable privacy laws, such as the GDPR, CCPA, and others. Here’s how we handle your data:
        </p>
        <ul>
          <li><strong>Data Minimization:</strong> We collect only the necessary data required to provide our services and improve user experience.</li>
          <li><strong>Data Retention:</strong> We store your data only as long as needed for the purpose it was collected and in accordance with legal and contractual obligations.</li>
          <li><strong>User Control:</strong> You have full control over your data. You can view, update, and delete your personal information at any time through your account settings.</li>
          <li><strong>Third-Party Sharing:</strong> We do not sell, rent, or lease your personal information to third parties. Any third-party services we use comply with our data protection policies.</li>
          <li><strong>Data Anonymization:</strong> When possible, we anonymize or pseudonymize your data to reduce privacy risks.</li>
        </ul>
      </section>

      <section>
        <h2>Compliance with Regulations</h2>
        <p>
          We are fully compliant with global data privacy regulations, ensuring that your data is handled with the utmost care and transparency. Our platform meets the requirements of the following:
        </p>
        <ul>
          <li><strong>GDPR (General Data Protection Regulation):</strong> We adhere to all provisions set out in the GDPR to protect the privacy of EU citizens.</li>
          <li><strong>CCPA (California Consumer Privacy Act):</strong> We comply with the CCPA, providing California residents with the right to access, delete, and opt-out of the sale of their personal information.</li>
          <li><strong>HIPAA (Health Insurance Portability and Accountability Act):</strong> For healthcare data, we comply with HIPAA to ensure the privacy and security of health information.</li>
        </ul>
      </section>

      <section>
        <h2>Data Breach Notification</h2>
        <p>
          In the event of a data breach, we are committed to notifying affected users within 72 hours of becoming aware of the breach, as required by applicable laws. We will provide a detailed report outlining the nature of the breach, the data affected, and the steps we are taking to mitigate the damage.
        </p>
      </section>

      <section>
        <h2>How to Contact Us</h2>
        <p>
          If you have any questions or concerns regarding your data security or privacy, please do not hesitate to contact us. We value your privacy and are committed to addressing any concerns promptly.
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:privacy@yourcompany.com">privacy@yourcompany.com</a></li>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Address:</strong> 123 Privacy Lane, Secure City, Country</li>
        </ul>
      </section>
    </div>
  );
};

export default DataSecurityPrivacy;
