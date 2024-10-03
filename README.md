# TypeScript Express App with MongoDB and Zod Validation

## Description

This project is a simple E-commerce API built using Node.js, Express, TypeScript, MongoDB, and Zod for validation. The API provides endpoints for managing products and orders.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohammad-al-samiul/TypeScript-Express-App-with-MongoDB-and-Zod-Validation.git
   ```

2. Navigate to the project directory:

   cd TypeScript-Express-App-with-MongoDB-and-Zod-Validation

   ```

   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root of the project and add the necessary environment variables:

```env
PORT=5000
DB_URI=mongodb+srv://your-username:your-password@your-cluster-url/your-database-name?retryWrites=true&w=majority
```

Replace `your-username`, `your-password`, `your-cluster-url`, and `your-database-name` with your actual MongoDB connection details.

## Running the Application

To run the application locally, use the following command:

```bash
npm start
```

This will start the server on `http://localhost:5000`.

## API Endpoints

### Products

- **Create a Product**

  ```http
  POST /api/products/create-product
  ```

- **Get All Products**

  ```http
  GET /api/products/
  ```

- **Get a Product by ID**

  ```http
  GET /api/products/:id
  ```

- **Update a Product by ID**

  ```http
  PUT /api/products/:productId
  ```

- **Delete a Product by ID**

  ```http
  DELETE /api/products/:productId
  ```

- **Search a Product**

  ```http
  GET /api/products?searchTerm=iphone
  ```

### Orders

- **Create an Order**

  ```http
  POST /api/orders/create-order
  ```

- **Get All Orders**

  ```http
  GET /api/orders/
  ```

- **Retrieve Orders by User Email**

  ```http
  GET /api/orders?email=level2@programming-hero.com
  ```

## Directory Structure

```
TypeScript-Express-App-with-MongoDB-and-Zod-Validation
├── src
│   ├── app.ts
│   ├── product.controller.ts
│   ├── productRoutes.ts
│   ├── order.controller.ts
│   └── orderRoutes.ts
├── package.json
└── tsconfig.json

```

Now you should be ready to run and test the application locally. If you encounter any issues, please refer to the documentation or raise an issue in the repository.
