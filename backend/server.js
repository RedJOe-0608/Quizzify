import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js';

import quizRoutes from './routes/quizRoutes.js'
const PORT = process.env.PORT || 5000

connectDB() //connecting to the database

const app = express()

app.get('/',(req,res) => {
    res.send("API is running...")
})

app.use('/api/quizzes',quizRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})