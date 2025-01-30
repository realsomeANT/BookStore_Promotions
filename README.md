# About by project :

It is a project to calculate the price of books from the store's promotions.
following promotions (Each book costs 100.):

- Buy 2 different books: 10% off those 2 books
- Buy 3 different books: 20% off those 3 books
- Buy 4 different books: 30% off those 4 books
- Buy 5 different books: 40% off those 5 books
- Buy 6 different books: 50% off those 6 books
- Buy 7 different books: 60% off those 7 books
---

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
   git clone https://github.com/realsomeANT/BookStore_Promotions.git
   cd BookStore_Promotions-main/my-backend
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
    ```   
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

**CRUD**
- **Create** : use Method: POST ,URL: `http://localhost:3000/product` ,Headers: Content-Type: application/json
  ```bash
  ex.{
  "bookname": "Harry Potter And The Philosopher's Stone",
  "price": 100
     }
  ```
- **Read** : use Method: GET ,Headers: Content-Type: application/json ,URL: `http://localhost:3000/product` or use URL : `http://localhost:3000/product?page={add number}&limit={add number}` For Pagination
- 
- **Update** : use Method: PUT ,URL: `http://localhost:3000/product/{id}` ,Headers: Content-Type: application/json
  ```bash
  ex.{
    "bookname": "Harry Potter And The Philosopher's Stone",
    "price": 101
     }
  ```
- **Delete** : use Method: DELETE ,URL: `http://localhost:3000/product/{id}`

## Cart API Endpoints
| Endpoint | Method | Description |
|-----------------|------|-------------------------------|
|/cart/add |	POST | Adds products to the cart. |

- **POST** : use Method: POST ,URL : `http://localhost:3000/cart/add` ,Headers: Content-Type: application/json
```bash
ex.{
    "books": [ "Harry Potter and the Philosopher's Stone ","Harry Potter and the Philosopher's Stone ","Harry Potter and the Prisoner of Azkaban "  ]
   }
```
---
## Frontend Routes Overview
|Route|	Page | Description |
|--------|-------|---------------------------|
|/	| Home | Displays the home page with products. |
|/cart	| CartPage | Displays the cart page. |

---
## Database

Use Postman and use Method: POST ,URL: `http://localhost:3000/product` ,Headers: Content-Type: application/json to add data to Database.

The expected value you will enter :

- Harry Potter and the Philosopher's Stone

- Harry Potter and the Chamber of Secrets

- Harry Potter and the Prisoner of Azkaban

- Harry Potter and the Goblet of Fire

- Harry Potter and the Order of the Phoenix

- Harry Potter and the Half-Blood Prince

- Harry Potter and the Deathly Hallows

---

