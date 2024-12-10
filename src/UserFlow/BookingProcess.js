import React from 'react';
import '../css/BookingProcess.css';

const BookingProcess = () => {
  return (
    <div className="booking-process-container">
      <h1>Booking Process</h1>

      <section>
        <h2>Step 1: Choose Your Service or Product</h2>
        <p>
          The first step in the booking process is selecting the service or product you would like to book. Whether it's a flight, hotel, tour, or event, you can browse our extensive catalog to find the perfect match for your needs.
        </p>
        <ul>
          <li><strong>Browse Categories:</strong> We offer a wide range of services and products. Use the categories to narrow your search (e.g., Flights, Hotels, Tours, Transportation).</li>
          <li><strong>Search:</strong> You can also use the search bar to find specific items quickly by entering keywords, dates, or locations.</li>
        </ul>
      </section>

      <section>
        <h2>Step 2: Select Dates and Preferences</h2>
        <p>
          After selecting your service or product, the next step is to choose your preferred dates or options. For example, if you're booking a flight or hotel, select your check-in and check-out dates, and for events, select the date and time.
        </p>
        <ul>
          <li><strong>Pick Your Dates:</strong> Choose your travel dates, check-in/check-out times, or event timings.</li>
          <li><strong>Customize Preferences:</strong> Customize your preferences based on the available options (e.g., room type, meal preferences, additional services).</li>
        </ul>
      </section>

      <section>
        <h2>Step 3: Enter Passenger or Guest Details</h2>
        <p>
          In this step, you’ll need to provide the necessary details for booking. This includes personal information like name, email address, phone number, and any specific requirements.
        </p>
        <ul>
          <li><strong>Personal Details:</strong> Fill out your personal information, such as full name, email, and phone number.</li>
          <li><strong>Special Requests:</strong> Include any special requests or requirements (e.g., disability assistance, meal preferences, additional luggage).</li>
          <li><strong>Identification Details:</strong> For certain bookings (e.g., flights), you may be asked to provide identification details like passport number or ID.</li>
        </ul>
      </section>

      <section>
        <h2>Step 4: Review Your Booking</h2>
        <p>
          Before confirming your booking, make sure to review all the details carefully. This includes the service/product, dates, preferences, and the total cost.
        </p>
        <ul>
          <li><strong>Check Your Selection:</strong> Review the service or product details, including dates, location, and any additional services or preferences you selected.</li>
          <li><strong>Check the Total Price:</strong> Ensure that all charges, including taxes and additional fees, are correctly displayed.</li>
          <li><strong>Edit if Necessary:</strong> If any details need to be corrected, you can go back and make changes before finalizing your booking.</li>
        </ul>
      </section>

      <section>
        <h2>Step 5: Make Payment</h2>
        <p>
          After reviewing your booking, it's time to proceed with payment. We offer a range of payment options to suit your needs, ensuring a secure and smooth transaction.
        </p>
        <ul>
          <li><strong>Select Payment Method:</strong> Choose your preferred payment method from available options like credit/debit card, PayPal, bank transfer, or other payment gateways.</li>
          <li><strong>Enter Payment Information:</strong> Provide your payment details, including card number, expiry date, and CVV, or log in to your PayPal account if using that option.</li>
          <li><strong>Secure Payment:</strong> All transactions are encrypted and processed securely to protect your information.</li>
        </ul>
      </section>

      <section>
        <h2>Step 6: Confirmation and Booking Details</h2>
        <p>
          Once your payment has been processed successfully, you will receive a booking confirmation with all the details of your reservation. A confirmation email will also be sent to the email address you provided during booking.
        </p>
        <ul>
          <li><strong>Booking Confirmation:</strong> You’ll receive an immediate confirmation of your booking on the website, along with a booking reference number.</li>
          <li><strong>Email Confirmation:</strong> A detailed email will be sent, which includes your booking reference, service/product details, and payment receipt.</li>
          <li><strong>Downloadable Voucher:</strong> If applicable, you will receive a voucher or ticket that you can download and print for your records or show at the venue.</li>
        </ul>
      </section>

      <section>
        <h2>Step 7: Modify or Cancel Your Booking (If Applicable)</h2>
        <p>
          In case your plans change, we provide options for modifying or canceling your booking. Please note that cancellation and modification policies vary based on the service or product.
        </p>
        <ul>
          <li><strong>Modify Your Booking:</strong> If you need to change any details (e.g., dates, guest details), you can access the “Manage Booking” section on our platform to make changes.</li>
          <li><strong>Cancel Your Booking:</strong> If you need to cancel your booking, you can do so through the same section. Cancellation fees may apply depending on the service.</li>
        </ul>
        <p>
          Please review the specific cancellation or modification policy of your booking to avoid any additional charges.
        </p>
      </section>

      <section>
        <h2>Contact Support</h2>
        <p>
          If you encounter any issues during the booking process or need assistance with any steps, feel free to contact our support team. We are available to help you at any point in the booking process.
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></li>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Live Chat:</strong> Available on the bottom-right corner of the page.</li>
        </ul>
      </section>
    </div>
  );
};

export default BookingProcess;