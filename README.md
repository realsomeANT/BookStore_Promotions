# Book Store - Setup Guide

This repository contains the implementation of a Book Store with the following structure:

- **Frontend**: Implemented using Vue 3 and Vite.( uses Vue 3, Tailwind CSS , Typescript)
- **Backend**: Implemented using NestJS.(Typescript, NestJS, MongoDB)
- **Database**: MongoDB for data storage.

---
## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB**
- **Git**

---
## Backend Setup

1. Clone the repository and navigate to the backend directory:

   ```bash
   git clone https://github.com/yourusername/book-store.git
   cd book-store/my-backend
    ```
2. Install the dependencies:
    ```bash 
    npm install
    ```
3. Create a .env file in the backend directory and add the following environment variables:
    ```bash
    NODE_ENV=development
    DATABASE=mongodb://localhost/nest
    PORT=3000
    ```
4. Start the backend server:
    ```bash
    npm run start:dev
    ``
- The backend server will run at:
  `http://localhost:3000`
---
## Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../my-frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
- Access the frontend at: 
`http://localhost:5173`
---
## Usage

- Open your browser and go to: 
`http://localhost:5173` 
to access the frontend.
- Ensure the backend server is running on:
 `http://localhost:3000` 
 for API access.   
---

<h1>API Endpoints</h1>

## Product API Endpoints

| Endpoint	| Method	| Description |
|---------------|------------|-----------------------|
|/product	|GET	| Retrieves all products. |
|/product/:id|	GET	| Retrieves a product by its ID. |
|/product	|POST	| Creates a new product. |
|/product/:id|	PUT	| Updates an existing product by its ID. |
|/product/:id|	DELETE	| Deletes a product by its ID. |

## Cart API Endpoints
| Endpoint | Method | Description |
|-----------------|------|-------------------------------|
|/cart/add |	POST | Adds products to the cart. |

## Frontend Routes Overview
|Route|	Page | Description |
|--------|-------|---------------------------|
|/	| Home | Displays the home page with products. |
|/cart	| CartPage | Displays the cart page. |
