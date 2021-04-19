import express, { response } from "express"
import mongoose, { mongo } from "mongoose"
import datab, { data } from "../data/data.js"

let app = express()
    mongoose.Promise = global.Promise;
    mongoose.connect(datab.datab, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true

    }).then(() => {
        console.log('Database sucessfully connected, running on port 27017')
    },
    error => {
        console.log('Database error:' + error)
    });


app.listen(4100, () => console.log("Server is running on port 4100"));