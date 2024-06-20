import express from 'express';
import HomeRouter from './routes/home-route.js';
import userRouter from './routes/user-route.js';
import connectDb from './db/mongo.js';

connectDb();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', HomeRouter);
app.use('/api/user', userRouter);

app.use((req, res, next) => {
  res.status(404).send('This route is not define');
});

app.listen(8080, () => {
  console.log(`Server is running port 8080`);
});
