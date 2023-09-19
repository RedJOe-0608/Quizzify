import mongoose from "mongoose";

//id, name, image, description, totalLevels, yourProgress, level

const optionsSchema = new mongoose.Schema({
    a : {type: String},
    b : {type: String},
    c : {type: String},
    d : {type: String},
})

const questionsSchema = new mongoose.Schema({
    questionNumber: {
        type: Number
    },
    question: {
        type: String,
        required: true
    },
    options: [optionsSchema],
    correctAnswer: {
        type: String,
        required: true
    },
    score: {type: Number, required:true, default: 0}
})

const exercisesSchema = new mongoose.Schema({
    exerciseNumber: {
        type: Number,
        default: 1,
    },
    questions: [questionsSchema],
    exercisePassScore: {type: Number, required: true}
})

const levelSchema = new mongoose.Schema({
    levelNumber: {
        type: Number,
        default: 1,
    },
    exercises: [exercisesSchema],
})


//main
const quizSchema = new mongoose.Schema({
    //which user is playing which particular quiz
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    totalLevels: {
        type: Number,
        required: true
    },
    yourProgress: {
        type: Number,
        required: true,
        default: 0
    },
    level: [levelSchema]
},
{
    timestamps: true
})

const Quiz = mongoose.model('Quiz', quizSchema)
export default Quiz