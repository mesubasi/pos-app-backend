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

## API Documentation

### Authentication

<p>The authentication API allows you to register, login, and manage JWT tokens (access and refresh tokens).</p>

POST /api/auth/register: Register a new user. <br>
POST /api/auth/login: Login an existing user. <br>
GET /api/users/get-all-users: Retrieve a list of all users. <br>
POST /api/auth/refresh: Refresh the access token using the refresh token. <br>
GET /api/auth/logout: Logout the user by clearing the refresh token.

#### Category CRUD

<p>Endpoints for managing product categories:</p>

GET /api/categories/get-all-category: Get a list of all categories. <br>
POST /api/categories/add-category: Create a new category. <br>
PUT /api/categories/update-category: Update an existing category by ID. <br>
DELETE /api/categories/delete-category: Delete a category by ID.

#### Product CRUD

<p>Endpoints for managing products:</p>

POST /api/products/add-product: Get a list of all products. <br>
GET /api/products/get-all-product: Create a new product. <br>
PUT /api/products/update-product: Update an existing product by ID. <br>
DELETE /api/products/delete-product: Delete a product by ID.

#### Invoice CRUD

<p>Endpoints for managing invoices:</p>

GET /api/invoices/get-all-invoices: Get a list of all invoices. <br>
POST /api/invoices/add-invoices: Create a new invoice.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
