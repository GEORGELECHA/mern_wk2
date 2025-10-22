const express = require("express"); //import express to create a router
const router = express.Router();
const Student = require("../models/students"); //import the Student model to interact with the database


//Route to get all students

router.get("/", async (requestAnimationFrame, res) =>{
    try{
        const students = await Student.find(); //find all students in the database
        res.status(200).json(students); //send the students as a JSON response with status code 200

    }catch (error) {
        res.status(500).json({message: error.message}); //send error message if something goes wrong
    }
});



//ROUTE TO CREATE A NEW STUDENT

router.post("/", async (req, res) => {
    const {name, age, email} = req.body; //destructure the request body to get the name, age, and email of the student

    try {
    
    const student = new Student({name, age, email}); //create a new student object using the Student model
    const saved = await student.save(); //save the student object to the database
    res.status(201).json(saved); //send the saved student object as a JSON response with status code 201

    } catch (error) {
        res.status(400).json({message: error.message}); //send error message if something goes wrong
    }
});



// updarte a student by id

router.put("/:id", async (req, res) =>{

    try {
        const student = await Student.findByIdAndUpdate
        (req.params.id, 
        req.body, 
        {new: true}); 
        //find the student by id and update it with the request body, return the updated student
    return res.status(200).json(student); //send the updated student as a JSON response with status code 200
    

    } catch (error) {
        res.status(400).json({message: error.message}); //send error message if something goes wrong
    }
});



// delete a student by id

router.delete("/:id", async (req, res) => {

    try {
        const student = await Student.findByIdAndDelete
        (req.params.id); //find the student by id and delete it
        res.status(200).json({message: "Student deleted successfully"}); //send success message as a JSON response with status code 200
    }catch (error) { 
        res.status(500).json({message: error.message}); //send error message if something goes wrong
    }

});

module.exports = router; //export the router to be used in other files
// This file defines the routes for the students resource in the application.
// It uses Express.js to create a router that handles HTTP requests for creating, reading, updating, and deleting students.
// The routes interact with the Student model to perform database operations.
// The router is exported to be used in the main application file or other modules.
// The routes are organized to follow RESTful principles, allowing for easy management of student data.
// Each route is defined with a specific HTTP method (GET, POST, PUT, DELETE) and a corresponding handler function.
// The handler functions use async/await to handle asynchronous operations with the database.
// Error handling is implemented to return appropriate status codes and messages in case of failures.
// The router is mounted on a specific path (e.g., /students) in the main application file to make it accessible.
// This modular approach helps keep the code organized and maintainable, especially as the application grows.
// The routes can be easily extended or modified without affecting the overall structure of the application.
// This file is a crucial part of the backend API, enabling client applications to interact with student data efficiently.
// It allows for CRUD operations on student records, making it a key component of the application's functionality.
// The use of Mongoose for database interactions simplifies the code and provides a clear schema for student data.