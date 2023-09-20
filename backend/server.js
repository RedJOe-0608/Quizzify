import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config()
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

import quizRoutes from './routes/quizRoutes.js'
import userRoutes from './routes/userRoutes.js'
const PORT = process.env.PORT || 5000

connectDB() //connecting to the database

const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie parser middleware
app.use(cookieParser())

app.get('/',(req,res) => {
    res.send("API is running...")
})

app.use('/api/quizzes',quizRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})