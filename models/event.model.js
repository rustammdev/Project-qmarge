import mongoose, { mongo } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const eventScheme = mongoose.Schema(
  {
    event_id: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    event_name: {
      type: String,
      required: [true, 'Please create the event name'],
    },

    //   Ushbu id avtamatik joylashadi event yaratgan insonniki
    // created_by == user_id
    created_by: {
      type: String,
      required: [true, 'Please add the id'],
      unique: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model('events', eventScheme);
export default model;
