//Script that we run that will seed all of our data to the database.

import mongoose from "mongoose";
import dotenv from "dotenv"
import colors from "colors"
import quiz from './data/quiz.js'
import users from './data/users.js'
import User from './models/userModel.js'
import Quiz from './models/quizModel.js'
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Quiz.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users) //inserting all users

        const adminUser = createdUsers[1]._id

        const sampleQuiz = quiz.map((q) => {
            return {...q, user: adminUser}
        })

        await Quiz.insertMany(sampleQuiz) //inserting all the quiz data along with a property of user(the admin user) with value of objectID

        console.log('Data Inserted!'.green.inverse);
        process.exit()
    } catch (error) {
            console.log(`${error}`.red.inverse);
            process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await Quiz.deleteMany()
        await User.deleteMany()
        console.log('Data deleted!'.green.inverse);
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1)
    }
} 


if(process.argv[2] === '-d')
{
    destroyData()
}else{
    importData()
}