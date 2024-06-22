import Event from '../models/event.model.js';
// import User from '../models/user.model.js';
import Question from '../models/question.model.js';
import EventQuestion from '../models/event.question.js';

const getQuestions = async (req, res) => {
  try {
    const { event_id, user_id } = req.body;
    // Agar req json malumotlar chala bo'lsa
    if (!event_id || !user_id) {
      return res
        .status(400)
        .json({ message: "Malumotlar bo'sh bo'lmasligi kerak!" });
    }

    // Event mavjudlikka tekshiruv
    let event = await Event.find({ event_id: event_id });
    if (event.length == 0) {
      return res.status(404).send('Event mavjud emas');
    }

    // res bergan user ushbu event yaratuvchisimi
    event = await Event.find({ created_by: user_id });
    if (event.length == 0) {
      return res
        .status(404)
        .send('Ushbu user event yaratuvchisi emas');
    }

    const question = await Question.find({ event_id: event_id });
    // Agar savollar mavjud bo'lmasa
    if (question.length == 0) {
      return res
        .status(404)
        .json({ message: 'Hali hech qanday savol mavjud emas' });
    }

    const questionTextMassiv = question.map(
      (question) => question.question_text
    );


    // Savollarni db ga qoshish
    const eventQuestion = EventQuestion.create({
      event_id: event_id,
      created_by: user_id,
      question_text: questionTextMassiv,
    });
    res.send('Malumotlar qoshildi');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default getQuestions;
