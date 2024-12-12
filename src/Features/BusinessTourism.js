import React from 'react';
import '../css/BusinessTourism.css';
import CodeBlock from '../pages/CodeBlock';

// Import images
import BusinessTourismImage from '../images/Features/business_tourism_overview.png';
import KeyAspectsImage from '../images/Features/KeyAspects_image.png';
import FacilitiesImage from '../images/Features/facilities_image.png';
import TrendsImage from '../images/Features/business_tourism_overview.png';
import PlanningImage from '../images/Features/business_tourism_overview.png';

const BusinessTourism = () => {
  const trendsExample = `
{
  "sustainability": true,
  "bleisure_travel": true,
  "virtual_and_hybrid_events": true,
  "customized_experiences": true
}
`;

  return (
    <div className="business-tourism-doc">
      <h1>Business Tourism Documentation</h1>

      {/* Overview */}
      <section>
        <h2>Overview</h2>
        <p>
          <strong>Business Tourism</strong> is a specialized segment of the tourism industry that focuses on travel associated with business activities, such as meetings, conferences, exhibitions, and corporate events. It blends professional obligations with opportunities for networking, knowledge exchange, and exploring new destinations.
        </p>
        <img
          src={BusinessTourismImage}
          alt="Business Tourism Overview"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Key Aspects of Business Tourism */}
      <section>
        <h2>Key Aspects of Business Tourism</h2>
        <h3>Types of Business Travel</h3>
        <ul>
          <li><strong>Meetings and Conferences:</strong> Travel for attending or organizing meetings, seminars, and workshops.</li>
          <li><strong>Corporate Events:</strong> Participation in product launches, corporate parties, or training sessions.</li>
          <li><strong>Exhibitions and Trade Shows:</strong> Visiting or exhibiting at trade fairs and expos.</li>
          <li><strong>Incentive Travel:</strong> Reward-based travel for employees as part of motivation or team-building programs.</li>
        </ul>

        <h3>Benefits of Business Tourism</h3>
        <ul>
          <li>Enhances networking opportunities.</li>
          <li>Promotes innovation through knowledge sharing.</li>
          <li>Boosts local economies by increasing spending on accommodation, transport, and hospitality.</li>
          <li>Provides a platform for businesses to showcase products and services on a global stage.</li>
        </ul>
        <img
          src={KeyAspectsImage}
          alt="Key Aspects of Business Tourism"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Facilities Required for Business Tourism */}
      <section>
        <h2>Facilities Required for Business Tourism</h2>
        <ul>
          <li><strong>Accommodations:</strong> Business-friendly hotels with meeting rooms, high-speed Wi-Fi, and concierge services.</li>
          <li><strong>Transportation:</strong> Accessibility to airports, train stations, and rental cars, with shuttle services to venues.</li>
          <li><strong>Technology and Connectivity:</strong> High-speed internet and video conferencing facilities for hybrid meetings.</li>
          <li><strong>Catering Services:</strong> Professional catering for events and conferences with diverse dining options.</li>
          <li><strong>Support Services:</strong> Event planners, coordinators, and translation services for international events.</li>
        </ul>
        <img
          src={FacilitiesImage}
          alt="Facilities for Business Tourism"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Popular Business Tourism Destinations */}
      <section>
        <h2>Popular Business Tourism Destinations</h2>
        <ul>
          <li><strong>North America:</strong> New York City, USA; Toronto, Canada.</li>
          <li><strong>Europe:</strong> London, UK; Berlin, Germany.</li>
          <li><strong>Asia:</strong> Singapore; Dubai, UAE.</li>
        </ul>
      </section>

      {/* Business Tourism Trends */}
      <section>
        <h2>Business Tourism Trends</h2>
        <ul>
          <li><strong>Sustainability:</strong> Companies focus on eco-friendly travel options and venues.</li>
          <li><strong>Bleisure Travel:</strong> Combines business and leisure travel, encouraging extended trips for personal exploration.</li>
          <li><strong>Digitalization:</strong> Virtual and hybrid event platforms are reducing the need for physical travel while increasing accessibility.</li>
          <li><strong>Customized Experiences:</strong> Tailor-made experiences for team-building and client engagement.</li>
        </ul>
        {/* <img
          src={TrendsImage}
          alt="Business Tourism Trends"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
        <h4>Example of Business Tourism Trends:</h4>
        <CodeBlock language="json" code={trendsExample} />
      </section>

      {/* Impact of Business Tourism */}
      <section>
        <h2>Impact of Business Tourism</h2>
        <ul>
          <li><strong>Economic Growth:</strong> Drives revenue for host cities through lodging, dining, and tourism activities.</li>
          <li><strong>Job Creation:</strong> Supports employment in hospitality, travel, and event management industries.</li>
          <li><strong>Cultural Exchange:</strong> Encourages cross-cultural understanding and collaboration.</li>
        </ul>
      </section>

      {/* Planning Business Tourism */}
      <section>
        <h2>Planning Business Tourism</h2>
        <ol>
          <li><strong>Define Objectives:</strong> Identify the purpose of the trip (e.g., client meetings, training, networking).</li>
          <li><strong>Budget Planning:</strong> Allocate funds for travel, accommodation, meals, and event participation.</li>
          <li><strong>Logistics Management:</strong> Arrange transportation, accommodations, and itineraries in advance.</li>
          <li><strong>Safety Measures:</strong> Ensure travel insurance and follow local COVID-19 protocols if applicable.</li>
        </ol>
        {/* <img
          src={PlanningImage}
          alt="Planning Business Tourism"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
      </section>

      {/* Future of Business Tourism */}
      <section>
        <h2>Future of Business Tourism</h2>
        <p>
          With advancements in technology and a focus on sustainability, business tourism is evolving to become more efficient and inclusive. Companies are adopting hybrid models that combine in-person and virtual interactions to maximize impact while minimizing costs and environmental footprint.
        </p>
      </section>
    </div>
  );
};

export default BusinessTourism;
