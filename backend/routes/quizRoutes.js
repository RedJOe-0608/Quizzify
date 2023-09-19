import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Quiz from '../models/quizModel.js';
import checkObjectId from '../middleware/checkObjectId.js';

const router = express.Router();


router.get('/', asyncHandler(async (req,res) => {
    const quizzes = await Quiz.find({})
    res.json(quizzes)
}))

router.get('/:id',checkObjectId,asyncHandler(async (req,res) => {
    const quiz = await Quiz.findById(req.params.id);

    if(quiz)
    {
       return res.json(quiz)
    }
    res.status(404).json({message: 'Quiz not found!'})
}))

export default router