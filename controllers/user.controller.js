import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

// Passwordni hashlash uchun
const hashedData = async (param) => {
  return {
    username: param.username,
    email: param.email,
    password: await bcrypt.hash(param.password, 10),
  };
};

const userController = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    if (!email || !password || !username) {
      return res.status(400);
      throw new Error("Malumotlar bo'sh bo'lmasligi kerak!");
    }

    // User malumotlari db borlikka tekshirish
    const isAviable = await User.findOne({ email });
    if (isAviable) {
      return res.status(400);
      throw new Error('User malumotlari allaqachon mavjud!');
    }

    // DB ga malumotlarni yozish
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashed,
    });
    res.status(200).send('User is registreted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default userController;
