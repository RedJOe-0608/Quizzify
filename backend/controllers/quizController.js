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

// @desc add a new level to a quiz
// @route PUT /api/quizzes/:id
// @access private/admin
const updateQuiz = asyncHandler(async (req,res) => {
    const quiz = await Quiz.findById(req.params.id);
    //from req.body. I will get a new level that needs to be added to a particular quiz
    if(quiz)
    {
        quiz.level = [...quiz.level, {...req.body}]
        quiz.totalLevels = quiz.level.length
        
    }

    const updatedQuiz = await quiz.save()

    res.status(200).json({
        _id: updatedQuiz._id,
        name: updatedQuiz.name,
        image: updatedQuiz.image,
        description: updatedQuiz.description,
        totalLevels: updatedQuiz.totalLevels,
        yourProgress: updatedQuiz.yourProgress,
        level: updatedQuiz.level,

    })
})

// @desc add a new exercise to a level of a quiz
// @route PUT /api/quizzes/:id/:level
// @access private/admin
const addNewExercise = asyncHandler(async(req,res) => {

    const quiz = await Quiz.findById(req.params.id);
   
    quiz.level[(req.params.level) - 1].exercises = [...quiz.level[req.params.level].exercises, req.body.newExercise]

    const updatedQuiz = await quiz.save()

    res.status(200).json({
        _id: updatedQuiz._id,
        name: updatedQuiz.name,
        image: updatedQuiz.image,
        description: updatedQuiz.description,
        totalLevels: updatedQuiz.totalLevels,
        yourProgress: updatedQuiz.yourProgress,
        level: updatedQuiz.level,

    })

})

export {getQuizById, getQuizzes,updateQuiz, addNewExercise}