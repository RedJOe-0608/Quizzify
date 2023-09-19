import asyncHandler from '../middleware/asyncHandler.js';
import Quiz from '../models/quizModel.js';

// @desc GET all quizzes
// @route GET /api/quizzes
// @access public
const getQuizzes = asyncHandler(async(req,res) => {
    const quizzes = await Quiz.find({})
    res.json(quizzes)
})

// @desc GET single language quiz
// @route GET /api/quizzes/:id
// @access public
const getQuizById = asyncHandler(async (req,res) => {
    const quiz = await Quiz.findById(req.params.id);

    if(quiz)
    {
       return res.json(quiz)
    }
    res.status(404)
    throw new Error("Quiz not found!")
})

export {getQuizById, getQuizzes}