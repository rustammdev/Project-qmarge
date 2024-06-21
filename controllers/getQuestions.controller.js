import Event from '../models/event.model.js';
import User from '../models/user.model.js';

const getQuestions = async (req, res) => {
  try {
    const { event_id, user_id } = req.body;

    if (!event_id || !user_id) {
      res
        .status(400)
        .json({ message: "Malumotlar bo'sh bo'lmasligi kerak!" });
    } else {
      res.send('Get all question');
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default getQuestions;
