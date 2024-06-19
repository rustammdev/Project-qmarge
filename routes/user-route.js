import express from 'express';

const route = express.Router();

route.post('/register', (req, res) => [
  res.status(200).send('Register router'),
]);

export default route;
