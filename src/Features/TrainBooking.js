import React from "react";
import "../css/Trainbooking.css";
import CodeBlock from "../pages/CodeBlock";

// Import local images
import TrainNavigationImage from "../images/Features/train_navigate.png";
import TrainSearchImage from "../images/Features/trainsearch_image.png";
import SystemRequirementsImage from "../images/Features/systemrequirements_image.png";
// import ContactInformationImage from "../images/Features/train_navigate.png";

const TrainSectionDocumentation = () => {
  const getStationCode = `
const connection = require('../utils/database');

exports.getStation = (req, res) => {
    try {
        const query = \`SELECT id, name FROM \${process.env.DB_NAME}.stations\`;

        connection.query(query, (error, results) => {
            if (error) {
                console.error("Error fetching station details:", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            
            res.status(200).json({ stations: results });
        });
    } catch (error) {
        console.error("Unexpected error fetching station details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
  `;

  const getTrainsCode = `
const moment = require('moment');
const connection = require('../utils/database');

exports.getTrains = async (req, res) => {
    const { stationId, date } = req.body;

    try {
        const dayOfWeek = moment(date).format('dddd');
        
        connection.query(
            \`SELECT name FROM \${process.env.DB_NAME}.stations WHERE id = ?\`,
            [stationId],
            (error, stationResults) => {
                if (error) {
                    console.error("Error fetching station details:", error);
                    return res.status(500).json({ message: 'Database query error' });
                }

                if (stationResults.length === 0) {
                    return res.status(404).json({ message: 'Station not found' });
                }

                const stationName = stationResults[0].name;              

                const query = \`
                    SELECT
                        t.name AS trainName,
                        t.number AS trainNumber,
                        t.days AS operatingDays,
                        r.arrival_time,
                        r.departure_time,
                        s1.name AS startStation,
                        s2.name AS endStation,
                        TIMEDIFF( r.departure_time , r.arrival_time ) AS duration,
                        GROUP_CONCAT(s.class ORDER BY s.class) AS seatClasses,  
                        GROUP_CONCAT(s.available_seats ORDER BY s.class) AS availableSeats,  
                        GROUP_CONCAT(s.total_seats ORDER BY s.class) AS totalSeats,  
                        GROUP_CONCAT(s.price ORDER BY s.class) AS price
                    FROM
                        \${process.env.DB_NAME}.trains t
                    JOIN
                        \${process.env.DB_NAME}.stations s1 ON t.start_station_id = s1.id
                    JOIN
                        \${process.env.DB_NAME}.stations s2 ON t.end_station_id = s2.id
                    JOIN
                        \${process.env.DB_NAME}.routes r ON r.train_id = t.id
                    JOIN
                        \${process.env.DB_NAME}.seats s ON s.train_id = t.id
                    WHERE
                        (s1.name = ? OR s2.name = ?)
                        AND FIND_IN_SET(?, t.days) > 0
                    GROUP BY
                        t.id, r.arrival_time, r.departure_time, s1.name, s2.name;
                \`;

                connection.query(query, [stationName, stationName, dayOfWeek], (err, trainResults) => {
                    if (err) {
                        console.error("Error fetching trains:", err);
                        return res.status(500).json({ message: 'Database query error' });
                    }

                    if (trainResults.length === 0) {
                        return res.status(404).json({ message: 'No trains available for the selected station and date' });
                    }

                    const processedTrains = trainResults.map(train => {
                        const seatClassesArray = train.seatClasses.split(',');
                        const availableSeatsArray = train.availableSeats.split(',');
                        const totalSeatsArray = train.totalSeats.split(',');
                        const priceArray = train.price.split(',');

                        const seats = seatClassesArray.map((seatClass, index) => ({
                            seatClass: seatClass.trim(),
                            availableSeats: parseInt(availableSeatsArray[index], 10),
                            totalSeats: parseInt(totalSeatsArray[index], 10),
                            price: parseInt(priceArray[index], 10),
                        }));

                        return {
                            ...train,
                            seats,
                        };
                    });

                    res.status(200).json({ trains: processedTrains });
                });
            }
        );
    } catch (error) {
        console.error("Unexpected error fetching train details:", error);
        res.status(500).json({ message: 'Server error' });
    }
};
  `;

  return (
    <div className="train-container">
      <h1>Train Section Documentation</h1>

      {/* Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          The Train Section is designed to provide users with a seamless
          experience for booking train tickets, viewing schedules, and managing
          their bookings. Users can search for trains, select their preferred
          class and coach, book tickets, and handle modifications to their
          bookings easily.
        </p>
      </section>

      {/* User Guide */}
      <section>
        <h2>User Guide</h2>
        <h3>Accessing the Train Section</h3>
        <p>
          Users can navigate to the Train Section from the homepage by clicking
          the "Train Tickets" button in the main menu.
        </p>
        <p>
          <strong>Example:</strong>
          <br />
          <img
            src={TrainNavigationImage}
            alt="Train Section Navigation"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </p>

        <h3>Searching for Trains</h3>
        <ol>
          <li>
            <strong>Enter Travel Details:</strong> Input departure and
            destination stations, travel date, and the number of passengers.
          </li>
          <li>
            <strong>Select Train:</strong> View available trains based on search
            criteria. Details include train number, departure/arrival time, and
            class options.
          </li>
          <li>
            <strong>Choose Class and Coach:</strong> Select the preferred class
            (e.g., Sleeper, AC, General) and coach.
          </li>
        </ol>
        <img
          src={TrainSearchImage}
          alt="Train Search Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Code Snippet Example */}
      <section>
        <h2>Code Snippets</h2>
        <h3>Fetching Stations (getStation)</h3>
        <p>
          Below is the code snippet to fetch stations from the database:
        </p>
        <CodeBlock language="javascript" code={getStationCode} />

        <h3>Fetching Trains (getTrains)</h3>
        <p>
          Below is the code snippet to fetch trains from the database based on station and date:
        </p>
        <CodeBlock language="javascript" code={getTrainsCode} />
      </section>

      {/* Technical Specifications */}
      <section>
        <h2>Technical Specifications</h2>
        <ul>
          <li>
            <strong>Supported Browsers:</strong> Chrome, Firefox, Safari, Edge.
          </li>
          <li>
            <strong>System Requirements:</strong> Minimum 2GB RAM, modern
            browsers, stable internet connection.
          </li>
          <li>
            <strong>Integrations:</strong> Train schedule APIs, secure payment
            gateways.
          </li>
        </ul>
        <img
          src={SystemRequirementsImage}
          alt="System Requirements Example"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Troubleshooting */}
      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li>
            <strong>Common Issues:</strong> 
            <ul>
              <li>Payment failure: Ensure a stable internet connection.</li>
              <li>
                Booking errors: Check passenger details and retry.
              </li>
            </ul>
          </li>
          <li>
            <strong>FAQs:</strong> 
            <ul>
              <li>
                <strong>Q:</strong> Can I modify my booking?<br />
                <strong>A:</strong> Yes, modifications can be done from the
                Manage Bookings section.
              </li>
              <li>
                <strong>Q:</strong> What payment methods are supported?<br />
                <strong>A:</strong> Credit card, debit card, and net banking.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Contact Information */}
      <section>
        <h2>Contact Information</h2>
        <p>
          For support, reach out via:
          <ul>
            <li>Support Email: support@trainbookings.com</li>
            <li>Phone: +1-800-123-4567</li>
          </ul>
        </p>
        {/* <img
          src={ContactInformationImage}
          alt="Contact Information"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
      </section>
    </div>
  );
};

export default TrainSectionDocumentation;
