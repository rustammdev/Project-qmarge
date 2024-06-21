import express from 'express';
import HomeRouter from './routes/home.route.js';
import userRouter from './routes/user.route.js';
import eventRouter from './routes/event.route.js';
import questionRouter from './routes/question.route.js';
import getQuestionRouter from './routes/get.questions.route.js';
import connectDb from './db/mongo.js';
import 'dotenv/config';

connectDb();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// home route
app.use('/', HomeRouter);

// ro'yxatdan o'tish
app.use('/api/user', userRouter);

// event yaratish
app.use('/api/event', eventRouter);

// mavjud eventga savol yuborish
app.use('/api/event', questionRouter);

// Eventga tegishli savollarni olish
app.use('/api/event', getQuestionRouter);

// Mavjud bo'lmagan rout uchun error
app.use((req, res, next) => {
  res.status(404).send('This route is not define');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
