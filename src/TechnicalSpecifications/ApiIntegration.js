import React from 'react';
import '../css/ApiIntegration.css';

const ApiIntegration = () => {
  return (
    <div className="api-integration-container">
      <h1>APIs and Integration</h1>

      <section>
        <h2>Overview</h2>
        <p>
          Seamlessly integrate with our platform using our robust and flexible APIs. Designed for scalability and efficiency, our APIs empower developers to connect applications, automate workflows, and enhance functionality with minimal effort.
        </p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Comprehensive Documentation:</strong> Step-by-step guides, sample code, and API references to accelerate development.</li>
          <li><strong>Secure Access:</strong> OAuth 2.0 and API key-based authentication for secure integrations.</li>
          <li><strong>Real-Time Data:</strong> Access live data updates with minimal latency.</li>
          <li><strong>Developer Support:</strong> Dedicated support team and community forums for assistance.</li>
        </ul>
      </section>

      <section>
        <h2>Available APIs</h2>
        <p>Our platform offers a variety of APIs to meet your business needs:</p>
        <ul>
          <li><strong>User Management API:</strong> Manage user accounts, roles, and permissions.</li>
          <li><strong>Data Retrieval API:</strong> Fetch detailed reports and analytics.</li>
          <li><strong>Notifications API:</strong> Send real-time notifications via email, SMS, or push alerts.</li>
          <li><strong>Payments API:</strong> Secure payment processing and transaction management.</li>
          <li><strong>Integration API:</strong> Connect third-party applications and services.</li>
        </ul>
      </section>

      <section>
        <h2>Integration Guides</h2>
        <p>
          Follow our integration guides to quickly connect with your preferred platforms and tools:
        </p>
        <ul>
          <li><strong>CRM Integration:</strong> Sync customer data with popular CRM systems like Salesforce, HubSpot, and Zoho.</li>
          <li><strong>ERP Integration:</strong> Automate workflows by connecting to ERP solutions like SAP and Oracle.</li>
          <li><strong>Custom Integration:</strong> Build custom connections tailored to your unique business requirements.</li>
        </ul>
      </section>

      <section>
        <h2>Getting Started</h2>
        <p>
          Start integrating with our APIs in just a few steps:
        </p>
        <ol>
          <li>Sign up for an API key through your <a href="/developer-dashboard">Developer Dashboard</a>.</li>
          <li>Review the <a href="/api-docs">API Documentation</a> for endpoints and usage examples.</li>
          <li>Test the APIs using tools like Postman or cURL.</li>
          <li>Deploy your integration and monitor its performance via the dashboard.</li>
        </ol>
      </section>

      <section>
        <h2>Support and Resources</h2>
        <p>
          Need help? We provide extensive support for developers, including:
        </p>
        <ul>
          <li><strong>Documentation:</strong> Access our <a href="/api-docs">API Documentation</a> for detailed references.</li>
          <li><strong>Developer Community:</strong> Join our <a href="/developer-forum">Developer Forum</a> to connect with peers.</li>
          <li><strong>Contact Support:</strong> Reach out to our team via email at <a href="mailto:api-support@example.com">api-support@example.com</a>.</li>
        </ul>
      </section>
    </div>
  );
};

export default ApiIntegration;
