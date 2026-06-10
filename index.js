import express from 'express';
import { connectDB } from './utills/db.js';
import dotenv from "dotenv";
dotenv.config();

const app = express()

try {  // Connect to the database
    await connectDB();
    //   console.log('Connected to the database');
} catch (error) {
    console.error('Error connecting to the database:', error);
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
}
)