import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3333;
const db = process.env.DATABASE_URL;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(`${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Running');
},
error => {
    console.log(`Database error: ${error}`)
});

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));