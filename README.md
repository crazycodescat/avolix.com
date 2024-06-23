# Avolix

## Overview

**Avolix** is a web application designed to provide users with the best and lowest prices for electronic components. By aggregating data from major electronic component distributors like Digikey and Mouser, Avolix enables users to make profitable purchasing decisions. The application displays prices from different distributors, allowing users to compare and purchase components directly from the distributor offering the best deal. Additional distributors will be integrated into the platform soon.

## Features

- **Price Aggregation:** Fetches and displays prices from top electronic component distributors.
- **Comparison:** Allows users to compare prices from different distributors in one place.
- **Direct Purchase Links:** Provides direct links to purchase from the distributor offering the lowest price.
- **User-Friendly Interface:** Easy-to-navigate interface to quickly find and compare component prices.

## Tech Stack

- **Frontend:**

  - **React.js**: For building the user interface.
  - **Redux**: For state management.
  - **CSS**: For styling the components.

- **Backend:**

  - **Node.js**: For running the backend server.
  - **Express.js**: For building the RESTful APIs.

- **Database:**

  - **MongoDB**: For storing and managing data.

- **Scraping & Data Aggregation:**
  - **Cheerio**: For scraping data from distributor websites.
  - **Axios**: For making HTTP requests to fetch data.

## Installation

### Prerequisites

- **Node.js** and **npm**: Make sure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/avolix.git
   cd avolix
   ```

2. **Install dependencies for both frontend and backend:**

   ```sh
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the application:**

   ```sh
   npm run dev
   ```

   This will run both the backend server and the React frontend application concurrently.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the search bar to find the electronic components you need.
3. Compare the prices from different distributors displayed in the search results.
4. Click on the direct purchase link to buy from the distributor offering the lowest price.

## Contribution

We welcome contributions to enhance Avolix. If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request.

### Steps to Contribute

1. **Fork the repository:**
   Click on the `Fork` button on the top right of the repository page.

2. **Clone your fork:**

   ```sh
   git clone https://github.com/your-username/avolix.git
   cd avolix
   ```

3. **Create a new branch:**

   ```sh
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes and commit:**

   ```sh
   git add .
   git commit -m "Add your message here"
   ```

5. **Push to your fork:**

   ```sh
   git push origin feature/your-feature-name
   ```

6. **Create a pull request:**
   Go to the original repository and click on `New Pull Request`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to contact us at support@avolix.com.

---

Thank you for using Avolix! We hope it helps you find the best deals on electronic components.
