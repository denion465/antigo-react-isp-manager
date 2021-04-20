import mongoose from "mongoose";
import express from "express";
require("../model/customerModel");
const routers = express.Router();
const Customer = mongoose.model("customers");

router.post("customers"), (req, res) => {}

app.post('/customers', (req, res) => {
   const newCustomer = new Customer({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       age: req.body.age,
       email: req.body.email,
   })
});

newCustomer.save().then(() => {
    console.log("salvo com sucesso")
});

module.exports = routers;