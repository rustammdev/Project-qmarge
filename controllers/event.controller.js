import User from '../models/user.model.js';
import Event from '../models/event.model.js';

const eventController = async (req, res) => {
  try {
    let { event_name, created_by } = req.body;
    if (!event_name) {
      res.status(400);
      throw new Error("Malumotlar bo'sh bo'lmasligi kerak!");
    }

    // test-id: e277ba28-6b94-494d-b979-7f8a0dbcbc76

    // User malumotlari db borlikka tekshirish
    // agar user mavjud bo'lsa keyin dbga event yaratish
    const isAviable = await User.findOne({ user_id: created_by });
    if (isAviable) {
      await Event.create(req.body);
      res.status(200).send('Event muvafaqiyatli yaratildi');
    } else {
      res.status(400).send('User malumotlari topilmadi');
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Manzil event.controller: ' + error });
    process.exit(1);
  }
};

export default eventController;
