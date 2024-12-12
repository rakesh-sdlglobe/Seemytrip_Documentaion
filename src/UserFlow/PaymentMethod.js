import React from 'react';
import '../css/PaymentMethod.css';

const PaymentMethod = () => {
  return (
    <div className="payment-method-container">
      <h1>Payment Methods</h1>
      <section>
        <h2>Available Payment Methods</h2>
        <p>
          We offer a wide range of secure payment options to ensure your booking or purchase is processed smoothly. You can choose from the following payment methods based on your convenience and location:
        </p>
        <ul>
          <li><strong>Credit and Debit Cards:</strong> We accept all major credit and debit cards, including Visa, MasterCard, American Express, and Discover. Simply enter your card details at checkout for quick processing.</li>
          <li><strong>PayPal:</strong> Use your PayPal account for fast, secure payments. Log in to your PayPal account during checkout and authorize the payment.</li>
          <li><strong>Bank Transfers:</strong> For larger payments, we offer the option to transfer funds directly from your bank account. This method may take a few days for processing.</li>
          <li><strong>Apple Pay / Google Pay:</strong> For mobile payments, we accept both Apple Pay and Google Pay. These methods offer a fast, secure way to complete your payment with just a tap.</li>
          <li><strong>Cryptocurrency (Optional):</strong> We also accept cryptocurrency payments, including Bitcoin and Ethereum. Please contact us for further details on how to proceed with cryptocurrency payments.</li>
        </ul>
      </section>

      <section>
        <h2>Payment Process</h2>
        <p>
          Once you have chosen your preferred payment method, follow the steps below to complete your payment:
        </p>
        <ol>
          <li><strong>Select Your Payment Method:</strong> At the checkout page, choose the payment option that best suits you.</li>
          <li><strong>Enter Your Details:</strong> Provide the required payment details such as your card number, expiration date, and CVV for card payments, or log into your PayPal account.</li>
          <li><strong>Review Your Order:</strong> Double-check the payment details, including the total amount, and ensure everything is correct.</li>
          <li><strong>Submit Payment:</strong> Click the 'Pay Now' or equivalent button to complete your transaction. You will receive a confirmation once the payment has been processed successfully.</li>
        </ol>
      </section>

      <section>
        <h2>Secure Payment Transactions</h2>
        <p>
          We prioritize the security of your payment information. Our payment gateways use industry-standard encryption technology to ensure that all transactions are secure and your personal information is protected. All payments are processed through secure channels, and we do not store your sensitive payment details.
        </p>
        <ul>
          <li><strong>SSL Encryption:</strong> Our website uses Secure Socket Layer (SSL) encryption to protect your payment information during transmission.</li>
          <li><strong>PCI-DSS Compliance:</strong> We comply with Payment Card Industry Data Security Standards (PCI-DSS) to ensure your credit card information is handled safely.</li>
          <li><strong>Two-Factor Authentication:</strong> For added security, some payment methods may require two-factor authentication (2FA) to verify your identity.</li>
        </ul>
      </section>

      <section>
        <h2>Payment Confirmation</h2>
        <p>
          After completing your payment, you will receive a confirmation that your transaction was successful. This includes:
        </p>
        <ul>
          <li><strong>Booking Confirmation:</strong> You will receive a booking confirmation along with your booking reference number, which you can use for future reference.</li>
          <li><strong>Email Receipt:</strong> A detailed receipt will be sent to your email address, outlining the payment amount, payment method, and transaction ID.</li>
          <li><strong>Voucher or Ticket:</strong> If applicable, you will receive a downloadable voucher or ticket to present at the venue or use for your booking.</li>
        </ul>
      </section>

      <section>
        <h2>Refunds and Cancellations</h2>
        <p>
          If you need to cancel your booking or request a refund, we have a straightforward process to assist you:
        </p>
        <ul>
          <li><strong>Refund Policy:</strong> Refunds are processed according to the terms and conditions of the service or product purchased. Please refer to the specific refund policy for your booking.</li>
          <li><strong>Cancellation Fee:</strong> Some bookings may be subject to cancellation fees depending on the timing and service provider's policy.</li>
          <li><strong>Refund Processing:</strong> Refunds are typically processed within 7-10 business days. Once your refund is processed, you will receive an email confirmation with details of the refunded amount.</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about payment methods, processing, or security, please don't hesitate to contact us. Our support team is here to assist you.
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@seemytrip.com">support@seemytrip.com</a></li>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Live Chat:</strong> Available on the bottom-right corner of the page for immediate assistance.</li>
        </ul>
      </section>
    </div>
  );
};

export default PaymentMethod;
