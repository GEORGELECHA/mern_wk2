const mongoose = require("mongoose"); //import mongoose to connect to MongoDB
require("dotenv").config(); //import dotenv to load environment variables from .env file

// This file is responsible for connecting to the MongoDB database using Mongoose.
// It exports a function that can be called to establish the connection.
// The connection string is stored in an environment variable for security reasons.
// The connection uses the new URL parser and unified topology to avoid deprecation warnings.
// The function logs a success message if the connection is established, or an error message if it fails.
// It is used in the main application file to ensure the database connection is established before starting the server.
// This is a common pattern in Node.js applications to manage database connections.



//spin up connection to mongoDB

const connectDB = async () => { 
    //async function to wait for connection to complete

    try {
        await mongoose.connect(process.env.MONGO_URI, // wait for mongoose to connect to the DB using the connection string from .env file
        {
            useNewUrlParser: true, // options to avoid deprecation warnings

            useUnifiedTopology: true, // options to avoid deprecation warnings
        });
        // console.log("MongoDB Connected..."); //log success message to console


    } catch (error){
        console.error(error.message); //log error message to console
        process.exit(1); // exit with failure
    }
    
};

module.exports = connectDB;


