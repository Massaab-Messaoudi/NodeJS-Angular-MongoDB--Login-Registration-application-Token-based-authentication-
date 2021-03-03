const mongoose = require('mongoose')
const Schema = mongoose.Schema
const empshema = new Schema({
    name:
    {
        type: String
    },
    email:
    {
        type: String
    },
    age:
    {
        type: Number
    },

},{timestamps:true}) // timestamps : true => tose feilds will automaticly created
const Employee= mongoose.model('Employee',empshema)
module.exports = Employee