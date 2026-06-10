import express from 'express';
import { connectDB } from './utills/db.ts';
import dotenv from "dotenv";

import authRoute from "./routes/userAuth.route.ts";

dotenv.config();

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/auth", authRoute);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log("server is running on port 3000")
        })
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();