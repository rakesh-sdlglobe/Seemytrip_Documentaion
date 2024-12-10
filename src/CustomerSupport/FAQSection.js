import React from 'react';
import '../css/FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I create an account?",
      answer:
        "Creating an account is simple! Click on the 'Sign Up' button at the top right corner of the homepage. Fill in your details and verify your email to get started.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept a variety of payment methods including credit cards, debit cards, PayPal, and other local payment options.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, bookings can be canceled based on our cancellation policy. Please check the details of your booking or contact support for assistance.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Enter your registered email, and we'll send you instructions to reset your password.",
    },
    {
      question: "Is my personal data secure?",
      answer:
        "Absolutely! We prioritize your privacy and security by employing state-of-the-art encryption and following GDPR standards.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team via live chat, email, or phone. Visit the Support Channels page for more details.",
    },
  ];

  return (
    <div className="faq-section-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
