# Social Network API

A backend API for a social networking platform.

## Description

This project is a backend RESTful API for a social networking application. Users can sign up, create a thought (like a tweet), react to others' thoughts, and add friends. 

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation and Usage

1. Clone this repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the necessary dependencies.
4. Ensure MongoDB is running on your machine.
5. Start the server using `npm start`.
6. Use API endpoints in platforms like Insomnia or Postman to test functionality.

## Endpoints

- `GET /api/users`: Retrieve all users.
- `GET /api/users/:id`: Retrieve a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.
- ... (Add other endpoints as necessary)

## License

![MIT License](https://img.shields.io/badge/license-MIT-green)
