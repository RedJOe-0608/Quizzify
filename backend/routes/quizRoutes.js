import express from 'express';
import { getQuizById,getQuizzes } from '../controllers/quizController.js';
import checkObjectId from '../middleware/checkObjectId.js';

const router = express.Router();

router.route('/').get(getQuizzes)
router.route('/:id').get(getQuizById)


export default router