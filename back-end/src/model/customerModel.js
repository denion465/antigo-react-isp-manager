import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Customer = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('customers', Customer);