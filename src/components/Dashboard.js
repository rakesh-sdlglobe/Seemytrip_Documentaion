import React from 'react';
import '../Dashboard.css';

const Dashboard = () => {

  return (
    <div className="content">
      <h2>Welcome to SeeMyTrip</h2>
      <p>
        SeeMyTrip is a comprehensive travel management platform designed to simplify and enhance the travel planning experience for users worldwide. With a focus on innovation, reliability, and user-centric design, SeeMyTrip caters to both leisure and business travelers by offering a seamless solution for booking flights, hotels, trains, cabs, buses, and other travel-related services.
      </p>
      
      <div className="overview">
        <h3>Purpose of the Application</h3>
        <p>
          The SeeMyTrip Dashboard provides administrators with a centralized interface to efficiently manage operations. It serves as the backbone of the platform, enabling users to:
        </p>
        <ul>
          <li>Monitor and analyze key metrics.</li>
          <li>Manage bookings for flights and hotels.</li>
          <li>Provide customer support efficiently.</li>
          <li>Ensure smooth communication between users and service providers.</li>
        </ul>
      </div>

      <div className="features">
        <h3>Key Features</h3>
        <ul>
          <li><strong>Flight Booking Management:</strong> Real-time updates and management of flight bookings, cancellations, and schedules.</li>
          <li><strong>Hotel Booking Management:</strong> Overview and control of hotel inventory, bookings, and user preferences.</li>
          <li><strong>Train Booking Management:</strong> Efficient handling of train schedules, seat availability, ticket bookings, and cancellations.</li>
          <li><strong>Cab Booking Management:</strong> Real-time updates, route optimization, and management of cab bookings, driver schedules, and user feedback.</li>
          <li><strong>Bus Booking Management:</strong> Seamless handling of bus schedules, seat availability, ticket bookings, and cancellations.</li>
          <li><strong>Data Insights:</strong> Comprehensive analytics for business decision-making.</li>
          <li><strong>User Management:</strong> Administer user accounts, roles, and permissions.</li>
        </ul>
      </div>

      <div className="audience">
        <h3>Target Audience</h3>
        <p>
          The dashboard is designed for travel administrators, customer support teams, and travel agents who aim to deliver a superior travel experience to end-users.
        </p>
      </div>

      <div className="stack">
        <h3>Technology Stack</h3>
        <ul>
          <li><strong>Frontend:</strong> React.js with modern UI/UX principles.</li>
          <li><strong>Backend:</strong> Node.js, Express.js, and a RESTful API architecture.</li>
          <li><strong>Database:</strong> MySQL for robust and scalable data management.</li>
          <li><strong>Styling:</strong> Bootstrap for responsive and professional designs.</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
