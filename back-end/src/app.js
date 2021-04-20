import express from "express";
import mongoose from "mongoose";
import { datab, saveCustomer, getCustomer, getCustomers }  from "../../data/data.js";

let port = 4100;
let app = express();
    mongoose.Promise = global.Promise;
    mongoose.connect(datab, {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true

    }).then(() => {
        console.log(`Database Running on port 27017`);
    },
    error => {
        console.log(`Database error: ${error}`);
    });
;


app.listen(port, () => console.log(`Server is running on port ${port}`));