import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const questionScheme = mongoose.Schema({
  question_id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  event_id: {
    type: String,
    required: [true, 'Please add the question id'],
  },
  asked_by: {
    type: String,
    required: [true, 'Please add the question id'],
  },
  question_text: {
    type: String,
    required: [true, 'Nimadur savol kiriting'],
  },
});

const model = mongoose.model('Questions', questionScheme);

export default model;
