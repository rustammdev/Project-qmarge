import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(201).send('This is home route');
});

router.post('/', (req, res) => {
  res.send(req.body);
});

export default router;
