import express from 'express';
import questionController from '../controllers/question.controller.js';

const route = express.Router();

// @desc Create qestion
//@route POST /api/event/question
//@access Private
route.post('/question', questionController);

export default route;
