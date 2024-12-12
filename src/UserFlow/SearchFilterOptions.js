import React from 'react';
import '../css/SearchFilterOptions.css';
import CodeBlock from '../pages/CodeBlock';

// Import images
import SearchImage from '../images/userFlow/search_overview.png';
import flightSearchImage from '../images/userFlow/search_image.png';
import FilterOptionsImage from '../images/userFlow/filter_options.png';
import SortingOptionsImage from '../images/userFlow/filter_options.png';

const SearchFilterOptions = () => {
  const advancedSearchExample = `
{
  "keywords": "Bengaluru to Delhi",
  "filters": {
    "price_range": "200-500",
    "flight_type": "non-stop",
    "train_type": "express",
    "date": "2024-12-15"
  }
}
`;

  return (
    <div className="search-filter-options-container">
      <h1>Search and Filter Options</h1>

      {/* Flight and Train Search Functionality */}
      <section>
        <h2>Search Functionality</h2>
        <p>
          Our platform provides a powerful search functionality that allows you to quickly find the flights and trains you need. You can search through various categories, such as destinations, train stations, dates, and more. The search bar is designed to provide fast and relevant results to help you navigate our platform efficiently.
        </p>
        <p>
          To use the search feature:
        </p>
        <ol>
          <li><strong>Step 1:</strong> Locate the search bar at the top of the page or within the navigation menu.</li>
          <li><strong>Step 2:</strong> Type your search query, such as a destination, date, or train station.</li>
          <li><strong>Step 3:</strong> Results will be displayed instantly as you type, showing the most relevant matches for flights or trains.</li>
        </ol>
        <p>
          The search feature supports partial text search, so even if you're unsure about the exact name, the system will provide relevant suggestions.
        </p>
        <img
          src={flightSearchImage}
          alt="Search Functionality Overview"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Filter Options for Flight and Train */}
      <section>
        <h2>Filter Options</h2>
        <p>
          To help you refine your search results and find exactly what you're looking for, we offer a variety of filter options for both flights and train bookings. Filters are available for different categories such as price, location, type, date, and class.
        </p>
        <p>Here’s how to use the filter options:</p>
        <ul>
          <li><strong>Step 1:</strong> After performing a search, you will see available filter options on the left side or top of the results page.</li>
          <li><strong>Step 2:</strong> Select the desired filter criteria (e.g., price range, flight type, date) to refine the results.</li>
          <li><strong>Step 3:</strong> Your search results will update dynamically based on the selected filters.</li>
        </ul>

        <h3>Common Filter Categories</h3>
        <ul>
          <li><strong>Price Range:</strong> Filter by a specific price range to find flights or train tickets within your budget.</li>
          <li><strong>Flight Type:</strong> Filter by flight type (e.g., non-stop, one-stop, or multi-stop).</li>
          <li><strong>Train Type:</strong> Filter by train type (e.g., high-speed, express, regular).</li>
          <li><strong>Date:</strong> Filter results by date of travel, ensuring you find flights or trains that depart on your preferred date.</li>
          <li><strong>Location:</strong> Narrow your search results based on departure or arrival location for trains and flights.</li>
          <li><strong>Class:</strong> Filter results by seat or service class (e.g., economy, first class, business class).</li>
        </ul>
        <p>
          You can apply multiple filters at once to narrow down your results precisely to your needs. For example, filter by price range and travel date to find flights or trains that match both criteria.
        </p>
        <img
          src={FilterOptionsImage}
          alt="Filter Options Overview"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Sorting Options for Flights and Trains */}
      <section>
        <h2>Sorting Options</h2>
        <p>
          In addition to filtering, we also provide sorting options to help you organize the results according to your preference. You can sort search results by:
        </p>
        <ul>
          <li><strong>Price (Low to High):</strong> Sort flights or train tickets based on their price from the least expensive to the most expensive.</li>
          <li><strong>Price (High to Low):</strong> Sort flights or train tickets from the most expensive to the least expensive.</li>
          <li><strong>Newest First:</strong> Display the most recently added flights or trains first.</li>
          <li><strong>Best Match:</strong> Sort by relevance to your search query, showing the most relevant flights or trains first.</li>
          <li><strong>Ratings:</strong> Sort by average ratings, helping you find the highest-rated flights or trains quickly.</li>
        </ul>
        <p>
          Sorting results allows you to organize data in a way that makes it easier to find the most relevant or favorable options.
        </p>
        <img
          src={SortingOptionsImage}
          alt="Sorting Options Overview"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      </section>

      {/* Resetting Filters and Search */}
      <section>
        <h2>Resetting Filters and Search</h2>
        <p>
          At any time, you can reset your search and filters to start over. To reset:
        </p>
        <ol>
          <li>Click on the "Reset" button located next to the search bar or filter section.</li>
          <li>This will clear all filters and reset the search results to the default view.</li>
        </ol>
        <p>
          You can also modify individual filter criteria without resetting everything to fine-tune your search results.
        </p>
      </section>

      {/* Advanced Search Features */}
      <section>
        <h2>Advanced Search Features</h2>
        <p>
          For users who need more specific search capabilities, we provide advanced search options. You can access advanced search by clicking on the “Advanced Search” link near the search bar. Here, you can:
        </p>
        <ul>
          <li><strong>Use keywords:</strong> Combine multiple search terms to get more specific results for flights or train bookings.</li>
          <li><strong>Search by attributes:</strong> Filter by additional attributes such as flight or train type, class, or seat availability.</li>
          <li><strong>Use wildcards:</strong> Search for partial words or phrases using special characters, such as * or ?.</li>
        </ul>
        <p>
          The advanced search helps you find more precise results, especially when searching for specialized travel options.
        </p>
        <h4>Example of Advanced Search Query:</h4>
        <CodeBlock language="json" code={advancedSearchExample} />
      </section>

      {/* Search and Filter Tips */}
      <section>
        <h2>Search and Filter Tips</h2>
        <p>
          To help you make the most out of the search and filter options, here are a few tips:
        </p>
        <ul>
          <li><strong>Use multiple filters:</strong> Combine filters to find the most relevant results quickly.</li>
          <li><strong>Be specific in your search:</strong> The more specific your search terms, the better the results.</li>
          <li><strong>Check for spelling mistakes:</strong> Ensure your search terms are spelled correctly to get the most accurate results.</li>
          <li><strong>Try using synonyms:</strong> If you're not getting the results you want, try different variations of your search terms.</li>
        </ul>
      </section>

      {/* Contact Support */}
      <section>
        <h2>Contact Support</h2>
        <p>
          If you are having trouble using the search or filter options, feel free to reach out to our support team. We are here to help you find what you need.
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@seemytrip.com">support@seemytrip.com</a></li>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Live Chat:</strong> Available on the bottom-right corner of the page.</li>
        </ul>
      </section>
    </div>
  );
};

export default SearchFilterOptions;
