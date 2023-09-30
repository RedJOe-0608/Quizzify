import express from 'express';
import { addNewExercise, getQuizById,getQuizzes, updateQuiz } from '../controllers/quizController.js';
import checkObjectId from '../middleware/checkObjectId.js';

const router = express.Router();

router.route('/').get(getQuizzes)
router.route('/:id').get(checkObjectId,getQuizById).put(checkObjectId,updateQuiz)
router.route('/:id/:level').put(checkObjectId,addNewExercise)


export default router