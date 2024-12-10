import React from 'react';
import '../css/SupportChannel.css';

const SupportChannel = () => {
  return (
    <div className="support-channel-container">
      <h1>Support Channels</h1>

      <section>
        <h2>Overview</h2>
        <p>
          Our <strong>Support Channels</strong> are designed to provide you with fast, reliable, and effective assistance for any questions or concerns. We are committed to ensuring that your experience with us is seamless and satisfactory.
        </p>
      </section>

      <section>
        <h2>Available Support Channels</h2>
        <ul>
          <li>
            <strong>Live Chat:</strong> Instant messaging with our support team for real-time assistance.
          </li>
          <li>
            <strong>Email Support:</strong> Reach out to us at <a href="mailto:support@example.com">support@example.com</a> for detailed queries.
          </li>
          <li>
            <strong>Phone Support:</strong> Speak directly with our customer care representatives at <strong>+1 800 123 4567</strong>.
          </li>
          <li>
            <strong>Help Center:</strong> Access a library of FAQs, tutorials, and guides.
          </li>
          <li>
            <strong>Social Media Support:</strong> Connect with us on platforms like Twitter and Facebook for quick updates and support.
          </li>
        </ul>
      </section>

      <section>
        <h2>How to Contact Us</h2>
        <ol>
          <li>
            <strong>Live Chat:</strong> Click the "Chat with Us" button on our website or app.
          </li>
          <li>
            <strong>Email:</strong> Send an email detailing your issue, including screenshots if necessary, to <a href="mailto:support@example.com">support@example.com</a>.
          </li>
          <li>
            <strong>Phone:</strong> Call us during our support hours: <em>Monday to Friday, 9 AM - 6 PM (GMT).</em>
          </li>
        </ol>
      </section>

      <section>
        <h2>Support Availability</h2>
        <ul>
          <li>
            <strong>24/7 Chat Support:</strong> Our chat team is always available, no matter the time zone.
          </li>
          <li>
            <strong>Email Responses:</strong> Expect a reply within 24-48 hours.
          </li>
          <li>
            <strong>Phone Support:</strong> Operates during business hours only.
          </li>
        </ul>
      </section>

      <section>
        <h2>Key Features of Our Support</h2>
        <ul>
          <li>Dedicated and trained professionals ready to assist.</li>
          <li>Quick response times for urgent issues.</li>
          <li>Multilingual support for global customers.</li>
          <li>Proactive resolution for technical and non-technical queries.</li>
        </ul>
      </section>

      <section>
        <h2>Feedback and Improvement</h2>
        <p>
          We value your feedback! Please share your suggestions to help us improve our support services. You can provide feedback through:
        </p>
        <ul>
          <li>Our <strong>Feedback Form</strong> available on the Help Center.</li>
          <li>Directly emailing your thoughts to <a href="mailto:feedback@example.com">feedback@example.com</a>.</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <p>
          Visit our <strong>Frequently Asked Questions</strong> page for quick answers to common queries. Topics include:
        </p>
        <ul>
          <li>Account management</li>
          <li>Billing and payments</li>
          <li>Technical troubleshooting</li>
          <li>Service-related concerns</li>
        </ul>
      </section>
    </div>
  );
};

export default SupportChannel;
