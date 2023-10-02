import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config()
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import path from 'path'
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

app.use('/api/quizzes',quizRoutes)
app.use('/api/users',userRoutes)

if(process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static(path.join(__dirname,'/frontend/build')))

    //any route that is not api will be redirected to index.html
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,"frontend",'build','index.html'))
    })
}else{
    app.get('/',(req,res) => {
        res.send("API is running...")
    })
}

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})