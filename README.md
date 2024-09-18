# POS Application Backend

This is the backend for the POS (Point of Sale) application built using MongoDB, Express, and Node.js.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mesubasi/pos-app-backend.git
   cd pos-app-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a .env file in the root of the project and add the following variables:

   ```sh
   PORT = e.g. 5000
   FRONTEND_URI = http://localhost:5173 = pos app frontend or online service url
   MONGO_URI = MongoDB Url
   ACCESS_TOKEN_SECRET = random token for jwt
   REFRESH_TOKEN_SECRET = random token for jwt
   ```

4. Start the development server:

   ```sh
   npm start
   ```

   The application will start on http://localhost:5000

## Technologies and Packages Used

- **Node.js**
- **express**
- **bcryptjs**
- **cookie-parser**
- **cors**
- **dotenv**
- **jsonwebtoken**
- **mongoose**
- **morgan**
- **nodemon**
