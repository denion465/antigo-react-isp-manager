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
        console.log(`Database Running`);
    },
    error => {
        console.log(`Database error: ${error}`);
    });
;

app.use(express.json());

 // API root
app.use('/', customersRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));