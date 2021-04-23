import express from "express";
import mongoose from "mongoose";
import {routes as customersRouter} from "./routes/customer"
import dotenv from 'dotenv'

dotenv.config();

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
app.use('/api', customersRouter)

// // 404 Handler
// app.use((req, res, next) => {
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });

// Base Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));