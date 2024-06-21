import express from 'express';

const router = express.Router();

// @desc Home 
// @route GET
// @access Public
router.get('/', (req, res) => {
  res.status(201).send('This is home route');
});


// @desc Home 
// @route POST
// @access Public
router.post('/', (req, res) => {
  res.send(req.body);
});

export default router;
