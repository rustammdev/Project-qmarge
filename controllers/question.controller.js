import Question from '../models/question.model.js';
import Event from '../models/event.model.js';

const questionController = async (req, res) => {
  try {
    const { event_id, asked_by, question_text } = req.body;

    if (!event_id || !asked_by || !question_text) {
      res.status(400);
      throw new Error("Malumotlar bo'sh bo'lmasligi kerak!");
    }

    // event mavjudlikka tekshirish
    const event = await Event.findOne({ event_id: event_id });
    if (!event) {
      res.status(500).send('Event mavjud emas');
    }

    const question = await Question.create(req.body);
    res.send('Quesition is added!');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default questionController;
