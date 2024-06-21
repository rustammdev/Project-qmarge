import express from 'express';
import getQuestionController from '../controllers/getQuestions.controller.js';

const route = express.Router();

//@desc Eventga tegishli bo'lgan savollarni olish
//@route GET /api/event/get
//@access Private
route.get('/get', getQuestionController);

export default route;
