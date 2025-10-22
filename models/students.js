//creating the schema for students
const mongoose = require('mongoose');


//create schema which are the rules to create collections aka tables in SQL
const StudentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
}, {timestamps: true});


// create a model that represents the collections aka tables in SQL
const Student = mongoose.model('Student', StudentSchema);

//export the model to be used in other files
module.exports = Student;