const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/userdata', authMiddleware, async (req, res) => {
  try {
  // console.log(userId)
    const user = await User.findById(req.userId);
    // console.log(user)
    res.json({ user });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

