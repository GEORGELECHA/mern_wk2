const express = require("express"); //import express to create a router
const dotenv = require("dotenv"); //import dotenv to load environment variables from .env file
const connectDB = require("./config/db"); //import the connectDB function to connect to the database

dotenv.config(); //load environment variables from .env file


const app = express(); //create an instance of express


//middleware to parse JSON request bodies
app.use(express.json()); //use express.json() middleware to parse JSON request bodies

//connect to the database
connectDB(); //call the connectDB function to establish a connection to the database

//routes
app.use("/students", require("./routes/studentsRoutes")); //use the students routes for the /students endpoint

//Route to handle root requests
app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to the Student Management API"}); //send a welcome message as a JSON response with status code 200
});

//Route to handle 404 errors
app.use((req, res) => {
    res.status(404).json({message: "Route not found"}); //send a 404 error message if the route is not found
});

//Route to handle server errors
app.use((err, req, res, next) => {
    console.error(err.stack); //log the error stack to the console
    res.status(500).json({message: "Internal Server Error"}); //send a 500 error message if something goes wrong
});

//start the server

// connect to the database first then start the server
// This ensures that the server only starts if the database connection is successful
// If the database connection fails, the server will not start, preventing potential errors in the application

const PORT = process.env.PORT || 5000; //set the port to the value from the environment variable or default to 5000


connectDB().then(() => { //call the connectDB function to establish a connection to the database

    try {

     console.log("Database connected successfully"); //log a message to the console when the database is connected
     app.listen(PORT, () => { //start the server and listen on the specified port
        console.log(`Server is running on port http://localhost:${PORT}`); //log a message to the console when the server is running
    })

    }catch (error) {
        console.error("Database connection failed:", error.message); //log an error message if the database connection fails
        process.exit(1); //exit the process with a failure code
    }
   
})


// const PORT = process.env.PORT || 5000; //set the port to the value from the environment variable or default to 5000
// app.listen(PORT, () => { //start the server and listen on the specified port
//     console.log(`Server is running on port http://localhost:${PORT}`); //log a message to the console when the server is running
// }); 

//end of app.listen
//end of server.js
// This file is the main entry point of the application. It sets up the server, connects to the database, and defines the routes for the application.
// It uses Express.js to create a web server and listens for incoming requests on a specified port.
// The server is configured to parse JSON request bodies and handle routes related to students.
// The database connection is established using Mongoose, and the connection string is stored in an environment variable for security.
// The server logs a message to the console when it starts successfully.