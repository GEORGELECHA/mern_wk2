STUDENT MANAGEMENT API
=====================

A simple REST API for managing student records built with Express.js and MongoDB.

Features
--------
- CRUD operations for student records
- MongoDB database integration
- Environment-based configuration
- RESTful API endpoints

Tech Stack
----------
- Node.js (v16+ recommended)
- Express.js framework
- MongoDB database
- Mongoose ODM

Setup Instructions
-----------------
1. Install Node.js dependencies:
   npm install

2. Configure environment variables in .env:
   MONGO_URI=<mongodb-connection-string>
   PORT=5000

3. Start the server:
   Production: npm start
   Development: npm run dev

API Endpoints
------------
GET /students
- Retrieves all students

POST /students
- Creates a new student
- Required fields: name, age, email

PUT /students/:id
- Updates student by ID
- Accepts fields to update

DELETE /students/:id
- Removes student by ID

Database Schema
--------------
Student:
- name (String, required)
- age (Number, required) 
- email (String, required, unique)

Project Structure
---------------
server.js         - Main application entry
config/db.js      - Database connection
models/student.js - Student data model
routes/           - API route handlers
.env             - Environment config

Notes
-----
- Email addresses must be unique
- MongoDB connection required
- Errors return JSON response