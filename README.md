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
   PORT = 5000
   FRONTEND_URI = http://localhost:5173 (or the deployed frontend URL)
   MONGO_URI = <Your MongoDB URL>
   ACCESS_TOKEN_SECRET = <Your JWT Access Token Secret>
   REFRESH_TOKEN_SECRET = <Your JWT Refresh Token Secret>
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

#### Register a new user

```sh
Endpoint: POST /api/auth/register

Body:
{
    "username":"username",
    "email": "user@example.com",
    "password": "yourpassword"
}
```

#### Login an existing user

```sh
Endpoint: POST /api/auth/login

Body:
{
    "email": "user@example.com",
    "password": "yourpassword"
}
```

#### Retrieves the information of a single user by their unique ID

```sh
Endpoint: GET /api/users

Headers:
Authorization: Bearer <your-access-token>

Body:
{
    "userID": "<MongoDB-object-id>"
}
```

#### Retrieve a list of all users

```sh
Endpoint: GET /api/users/get-all-users

Headers:
Authorization: Bearer <your-access-token>
```

#### Refresh the access token using the refresh token

```sh
Endpoint: POST /api/auth/refresh
```

### Category CRUD

<p>Endpoints for managing product categories:</p>

#### Get a list of all categories

```sh
Endpoint: GET /api/categories/get-all-category

Headers:
Authorization: Bearer <your-access-token>
```

#### Create a new category

```sh
POST /api/categories/add-category

Headers:
Authorization: Bearer <your-access-token>

Body:
{
    "title": "Xyz"
}
```

#### Update an existing category by ID

```sh
Endpoint: PUT /api/categories/update-category

Headers:
Authorization: Bearer <your-access-token>

Body:
{
    "categoryId": "<MongoDB-object-id>",
    "title": "Xyz"
}
```

#### Delete a category by ID

```sh
Endpoint: DELETE /api/categories/delete-category

Headers:
Authorization: Bearer <your-access-token>

Body:
{
    "categoryId": "<MongoDB-object-id>"
}
```

### Product CRUD

<p>Endpoints for managing products:</p>

#### Create a new product

```sh
Endpoint: POST /api/products/add-product

Headers:
Authorization: Bearer <your-access-token>

Body:
{
    "title": "Xyz",
    "img": "IMG Url",
    "price": 10,
    "category":"Fruit"

}
```

#### Get a list of all products

```sh
Endpoint: GET /api/products/get-all-product

Headers:
Authorization: Bearer <your-access-token>
```

#### Update an existing product by ID

```sh
PUT /api/products/update-product

Headers:
Authorization: Bearer <your-access-token>

Body:
{
    "productId": "<MongoDB-object-id>",
    "title": "Xyz"
}
```

#### Delete a product by ID

```sh
DELETE /api/products/delete-product

Headers:
Authorization: Bearer <your-access-token>

Body:
{
    "productId": "<MongoDB-object-id>"
}
```

### Invoice CRUD

<p>Endpoints for managing invoices:</p>

#### Get a list of all invoices

```sh
Endpoint: GET /api/invoices/get-all-invoices

Headers:
Authorization: Bearer <your-access-token>
```

#### Create a new invoice

```sh
Endpoint: POST /api/invoices/add-invoices

Headers:
Authorization: Bearer <your-access-token>

Body:
{
    "customerName": "Test",
    "phoneNumber": "00000000000",
    "paymentMethod": "Cash",
    "cartItems": ["item1","item2"],
    "subTotal": 200,
    "tax": 10,
    "totalAmount": 210
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
