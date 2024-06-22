import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const userSchem = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add the user name'],
      // unique
    },
    email: {
      type: String,
      required: [true, 'Please add the email address'],
    },
    password: {
      type: String,
      required: [true, 'Please add the password'],
    },
    user_id: {
      type: String,
      default: uuidv4,
      unique: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model('users', userSchem);

export default model;
