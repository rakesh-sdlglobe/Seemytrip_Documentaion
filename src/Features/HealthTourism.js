import React from 'react';
import '../css/HealthTourism.css';
import CodeBlock from '../pages/CodeBlock';

// Import images
import HealthTourismImage from '../images/Features/health_tourism_overview.png';
import TypesImage from '../images/Features/types_image.png';
import FacilitiesImage from '../images/Features/facilities_image.png';
import TrendsImage from '../images/Features/health_tourism_overview.png';
import PlanningImage from '../images/Features/health_tourism_overview.png';

const HealthTourism = () => {
  const trendsExample = `
{
  "holistic_wellness": true,
  "telemedicine": true,
  "preventive_care": true,
  "customized_treatment_plans": true
}
`;

  return (
    <div className="health-tourism-doc">
      <h1>Health Tourism Documentation</h1>

      {/* Overview */}
      <section>
        <h2>Overview</h2>
        <p>
          <strong>Health Tourism</strong>, also known as medical or wellness tourism, involves traveling to another region or country to receive healthcare or wellness treatments. This sector has gained immense popularity as people seek high-quality, cost-effective medical care, alternative therapies, and rejuvenation programs globally.
        </p>
        <img
          src={HealthTourismImage}
          alt="Health Tourism Overview"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Types of Health Tourism */}
      <section>
        <h2>Types of Health Tourism</h2>
        <ul>
          <li>
            <strong>Medical Tourism:</strong> Travel for medical procedures such as surgeries, dental care, or treatments for chronic conditions.
          </li>
          <li>
            <strong>Wellness Tourism:</strong> Focuses on relaxation, stress relief, and rejuvenation through activities like spa retreats, yoga, or meditation.
          </li>
          <li>
            <strong>Rehabilitative Tourism:</strong> Travel to specialized rehabilitation centers for physical or psychological recovery.
          </li>
        </ul>
        <img
          src={TypesImage}
          alt="Types of Health Tourism"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Popular Health Tourism Destinations */}
      <section>
        <h2>Popular Health Tourism Destinations</h2>
        <ul>
          <li>
            <strong>India:</strong> Renowned for affordable medical care, Ayurveda, and holistic wellness programs.
          </li>
          <li>
            <strong>Thailand:</strong> Offers advanced cosmetic surgeries and spa retreats in scenic locations.
          </li>
          <li>
            <strong>Germany:</strong> Known for cutting-edge medical technology and rehabilitation services.
          </li>
          <li>
            <strong>Turkey:</strong> A hub for hair transplants, dental care, and cosmetic procedures.
          </li>
        </ul>
      </section>

      {/* Benefits of Health Tourism */}
      <section>
        <h2>Benefits of Health Tourism</h2>
        <ul>
          <li>Access to specialized medical services not available locally.</li>
          <li>Cost savings on medical treatments and procedures.</li>
          <li>Opportunity to combine healthcare with travel and leisure.</li>
          <li>Improved privacy for undergoing sensitive treatments.</li>
        </ul>
      </section>

      {/* Facilities Required for Health Tourism */}
      <section>
        <h2>Facilities Required for Health Tourism</h2>
        <ul>
          <li>
            <strong>Hospitals and Clinics:</strong> Accredited facilities with modern equipment and qualified professionals.
          </li>
          <li>
            <strong>Accommodation:</strong> Comfortable and hygienic lodging near healthcare centers.
          </li>
          <li>
            <strong>Transportation:</strong> Accessible travel options for patients and companions.
          </li>
          <li>
            <strong>Post-Treatment Care:</strong> Support for recovery, including physiotherapy or wellness programs.
          </li>
        </ul>
        <img
          src={FacilitiesImage}
          alt="Facilities for Health Tourism"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Health Tourism Trends */}
      <section>
        <h2>Health Tourism Trends</h2>
        <ul>
          <li>
            <strong>Holistic Wellness:</strong> A rising interest in natural therapies, yoga, and mindfulness practices.
          </li>
          <li>
            <strong>Telemedicine:</strong> Virtual consultations before and after travel to minimize in-person visits.
          </li>
          <li>
            <strong>Preventive Care:</strong> Travelers seeking health check-ups and early disease detection packages.
          </li>
          <li>
            <strong>Customized Treatment Plans:</strong> Tailored healthcare experiences based on individual needs.
          </li>
        </ul>
        {/* <img
          src={TrendsImage}
          alt="Health Tourism Trends"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
        <h4>Example of Health Tourism Trends:</h4>
        <CodeBlock language="json" code={trendsExample} />
      </section>

      {/* Impact of Health Tourism */}
      <section>
        <h2>Impact of Health Tourism</h2>
        <ul>
          <li>
            <strong>Economic Boost:</strong> Generates significant revenue for host countries.
          </li>
          <li>
            <strong>Improved Healthcare Infrastructure:</strong> Encourages investment in medical facilities and technology.
          </li>
          <li>
            <strong>Cultural Exchange:</strong> Facilitates interaction between diverse cultures through healthcare services.
          </li>
        </ul>
      </section>

      {/* Challenges in Health Tourism */}
      <section>
        <h2>Challenges in Health Tourism</h2>
        <ul>
          <li>
            Ensuring patient safety and quality standards across international borders.
          </li>
          <li>
            Addressing language and cultural barriers for international patients.
          </li>
          <li>
            Legal and ethical concerns regarding medical procedures in different countries.
          </li>
        </ul>
      </section>

      {/* Planning for Health Tourism */}
      <section>
        <h2>Planning for Health Tourism</h2>
        <ol>
          <li>
            <strong>Research:</strong> Choose destinations and facilities that meet your medical or wellness needs.
          </li>
          <li>
            <strong>Budgeting:</strong> Estimate costs for treatment, travel, and accommodation.
          </li>
          <li>
            <strong>Consultation:</strong> Connect with healthcare providers for pre-arrival evaluations.
          </li>
          <li>
            <strong>Travel Arrangements:</strong> Ensure proper documentation, visas, and travel insurance.
          </li>
        </ol>
        {/* <img
          src={PlanningImage}
          alt="Planning Health Tourism"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        /> */}
      </section>

      {/* Future of Health Tourism */}
      <section>
        <h2>Future of Health Tourism</h2>
        <p>
          With advancements in telemedicine and growing awareness of preventive healthcare, the future of health tourism is promising. Countries are investing heavily in state-of-the-art facilities and wellness programs, making health tourism more accessible and appealing to global travelers.
        </p>
      </section>
    </div>
  );
};

export default HealthTourism;
