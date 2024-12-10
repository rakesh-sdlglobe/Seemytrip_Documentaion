import React from 'react';
import '../css/SearchFilterOptions.css';

const SearchFilterOptions = () => {
  return (
    <div className="search-filter-options-container">
      <h1>Search and Filter Options</h1>

      <section>
        <h2>Search Functionality</h2>
        <p>
          Our platform provides a powerful search functionality that allows you to quickly find the information you need. You can search through various categories, such as services, products, or users. The search bar is designed to provide fast and relevant results to help you navigate our platform efficiently.
        </p>
        <p>
          To use the search feature:
        </p>
        <ol>
          <li><strong>Step 1:</strong> Locate the search bar at the top of the page or within the navigation menu.</li>
          <li><strong>Step 2:</strong> Type your search query, such as a product name, service, or location.</li>
          <li><strong>Step 3:</strong> Results will be displayed instantly as you type, showing the most relevant matches.</li>
        </ol>
        <p>
          The search feature supports partial text search, so even if you're unsure about the exact name, the system will provide relevant suggestions.
        </p>
      </section>

      <section>
        <h2>Filter Options</h2>
        <p>
          To help you refine your search results and find exactly what you're looking for, we offer a variety of filter options. Filters are available for different categories such as price, location, type, or status. You can apply multiple filters to narrow down your results further.
        </p>
        <p>Here’s how to use the filter options:</p>
        <ul>
          <li><strong>Step 1:</strong> After performing a search, you will see available filter options on the left side or top of the results page.</li>
          <li><strong>Step 2:</strong> Select the desired filter criteria (e.g., price range, date, category) to refine the results.</li>
          <li><strong>Step 3:</strong> Your search results will update dynamically based on the selected filters.</li>
        </ul>

        <h3>Common Filter Categories</h3>
        <ul>
          <li><strong>Price Range:</strong> Filter by a specific price range to find items within your budget.</li>
          <li><strong>Location:</strong> Narrow your search results based on a geographic location or area.</li>
          <li><strong>Category:</strong> Filter by specific categories (e.g., products, services, posts) to find the most relevant results.</li>
          <li><strong>Status:</strong> Filter results by status (e.g., "Available", "Out of Stock", "Completed") to manage your search more efficiently.</li>
          <li><strong>Date:</strong> Sort results by recent or upcoming dates, especially useful for events or time-sensitive items.</li>
        </ul>
        <p>
          You can apply multiple filters at once to narrow down your results precisely to your needs. For example, filter by price range and location to find products that match both criteria.
        </p>
      </section>

      <section>
        <h2>Sorting Options</h2>
        <p>
          In addition to filtering, we also provide sorting options to help you organize the results according to your preference. You can sort search results by:
        </p>
        <ul>
          <li><strong>Price (Low to High):</strong> Sort items based on their price from the least expensive to the most expensive.</li>
          <li><strong>Price (High to Low):</strong> Sort items from the most expensive to the least expensive.</li>
          <li><strong>Newest First:</strong> Display the most recently added items first.</li>
          <li><strong>Best Match:</strong> Sort by relevance to your search query, showing the most relevant items first.</li>
          <li><strong>Ratings:</strong> Sort by average ratings, helping you find the highest-rated items quickly.</li>
        </ul>
        <p>
          Sorting results allows you to organize data in a way that makes it easier to find the most relevant or favorable options.
        </p>
      </section>

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

      <section>
        <h2>Advanced Search Features</h2>
        <p>
          For users who need more specific search capabilities, we provide advanced search options. You can access advanced search by clicking on the “Advanced Search” link near the search bar. Here, you can:
        </p>
        <ul>
          <li><strong>Use keywords:</strong> Combine multiple search terms to get more specific results.</li>
          <li><strong>Search by attributes:</strong> Filter by additional attributes, such as color, size, or brand (for product searches).</li>
          <li><strong>Use wildcards:</strong> Search for partial words or phrases using special characters, such as * or ?.</li>
        </ul>
        <p>
          The advanced search helps you find more precise results, especially when searching for specialized content.
        </p>
      </section>

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

      <section>
        <h2>Contact Support</h2>
        <p>
          If you are having trouble using the search or filter options, feel free to reach out to our support team. We are here to help you find what you need.
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

export default SearchFilterOptions;
