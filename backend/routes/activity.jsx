const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

router.post('/', async (req, res) => {
  try {
    const newActivity = new Activity(req.body);
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
