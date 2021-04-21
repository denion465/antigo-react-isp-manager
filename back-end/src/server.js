let data = new Date();
let hour = data.getHours();
let min = data.getMinutes();

const express = require("express");
const mongoose = require("mongoose");
const customersRouter = require("./routes/customer")

require("dotenv").config()

const PORT = process.env.PORT || 5000;

const app = express();
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true

    }).then(() => {
        console.log(`[info] ${hour}:${min} Database Running`);
    },
    error => {
        console.log(`Database error: ${error}`);
    });
;

app.use(express.json());

 // API root
app.use('/', customersRouter)

app.listen(PORT, () => console.log(`[info] ${hour}:${min} Server is running on port ${PORT}`));