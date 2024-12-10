import React from 'react';
import '../css/PricingPlans.css';

const PricingPlans = () => {
  return (
    <div id="pricing-plans-container">
      <h1>Our Pricing Plans</h1>
      <p>
        We offer flexible pricing plans tailored to suit the needs of businesses and individual customers. Whether you’re booking for personal use or managing a large-scale event, we have a plan for you. Choose the plan that fits your needs and enjoy the best of our services!
      </p>

      <div id="pricing-plans">
        <div className="plan-card">
          <h2>Basic Plan</h2>
          <p className="price">₹499.99/month</p>
          <p className="plan-description">
            Perfect for individuals or small teams. Get access to essential features to get started.
          </p>
          <ul>
            <li>1 User License</li>
            <li>Access to Standard Features</li>
            <li>Basic Support</li>
            <li>Booking Up to 5 Services per Month</li>
          </ul>
          <button className="btn-signup">Get Started</button>
        </div>

        <div className="plan-card">
          <h2>Standard Plan</h2>
          <p className="price">₹1499.99/month</p>
          <p className="plan-description">
            Ideal for growing teams with moderate needs. Get additional features and enhanced support.
          </p>
          <ul>
            <li>Up to 5 User Licenses</li>
            <li>Advanced Booking Features</li>
            <li>Priority Support</li>
            <li>Booking Up to 20 Services per Month</li>
            <li>Reports & Analytics</li>
          </ul>
          <button className="btn-signup">Get Started</button>
        </div>

        <div className="plan-card">
          <h2>Premium Plan</h2>
          <p className="price">₹4999.99/month</p>
          <p className="plan-description">
            Perfect for businesses or large teams. Get access to all our premium features for maximum flexibility.
          </p>
          <ul>
            <li>Unlimited User Licenses</li>
            <li>All Features Included</li>
            <li>Dedicated Account Manager</li>
            <li>Unlimited Booking Services</li>
            <li>24/7 Priority Support</li>
            <li>Advanced Reporting & Analytics</li>
          </ul>
          <button className="btn-signup">Get Started</button>
        </div>
      </div>

      <section id="custom-plans-section">
        <h2>Custom Plans</h2>
        <p>
          If our standard plans don't meet your requirements, we offer custom pricing options. Get in touch with our sales team to discuss your needs and get a tailored plan designed just for you.
        </p>
        <button className="btn-contact">Contact Sales</button>
      </section>

      <section id="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <p>
          Our pricing plans are designed to offer maximum value at affordable rates. With each plan, you get access to a high-quality service that is easy to use and designed to scale with your needs. Here's why our customers love our platform:
        </p>
        <ul>
          <li><strong>Affordable Prices:</strong> We offer competitive pricing without compromising on quality.</li>
          <li><strong>Flexible Plans:</strong> Choose a plan that suits your needs, with the option to upgrade at any time.</li>
          <li><strong>24/7 Support:</strong> Get expert assistance anytime with our 24/7 customer support team.</li>
          <li><strong>Scalable Features:</strong> As your needs grow, our plans and features will scale with you.</li>
        </ul>
      </section>
    </div>
  );
};

export default PricingPlans;
