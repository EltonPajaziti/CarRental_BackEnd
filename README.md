# CarRentalBackend

CarRentalBackend is a backend API built with Express.js and MongoDB (Mongoose) for managing user registration, authentication, and car listings with filtering capabilities.

## Features
- User registration with password hashing (BCrypt)
- User authentication with JWT stored in an HttpOnly cookie
- `/my-profile` endpoint for retrieving the currently authenticated user's details
- `/rental-cars` endpoint to list available cars sorted by daily price, with optional filters:
  - Year (`year`)
  - Color (`color`)
  - Steering type (`steering_type`)
  - Number of seats (`number_of_seats`)
  - Car name (`name`)
- CRUD operations for cars (add, list, update, delete)

## Tech Stack
- Node.js, Express.js
- MongoDB, Mongoose
- JSON Web Tokens (JWT), cookie-parser, bcrypt

## Project Structure
```
CarRentalAPI/
│
├── auth/
│ ├── checkauth.js
│ └── token.js
│
├── controller/
│ ├── login.js
│ ├── signup.js
│ ├── myProfile.js
│ └── cars.js
│
├── database/
│ └── db.js
│
├── models/
│ ├── car.js
│ └── user.js
│
├── routes/
│ ├── auth.js
│ └── cars.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

## Requirements
- Node.js v18+
- MongoDB running locally (`mongodb://localhost:27017`) or Atlas
- Postman (or any HTTP client) for testing

