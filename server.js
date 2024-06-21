import express from 'express';
import HomeRouter from './routes/home-route.js';
import userRouter from './routes/user-route.js';
import eventRouter from './routes/event.route.js';
import connectDb from './db/mongo.js';
import 'dotenv/config'

connectDb();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', HomeRouter);
app.use('/api/user', userRouter);
app.use('/api/events/', eventRouter);


app.use((req, res, next) => {
  res.status(404).send('This route is not define');
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
