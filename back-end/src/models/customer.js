const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    dataAdded: {
        type: Date,
        require: true,
        default: Date.now
    }
});

module.exports = mongoose.model("Customer", customerSchema);