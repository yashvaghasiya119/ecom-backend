import express from 'express';
import { connectDB } from './utills/db.js';
import dotenv from "dotenv";

import authRoute from "./routes/userAuth.route.js"

dotenv.config();

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dbConnect = await connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/auth", authRoute);

app.listen(3000, () => {
    console.log("server is running on port 3000")
}
)