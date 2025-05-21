const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// SIGNUP
router.post('/signup', async (req, res) => {
  const { name, emailOrPhone, password } = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
    });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email: emailOrPhone.includes('@') ? emailOrPhone : '',
      phone: !emailOrPhone.includes('@') ? emailOrPhone : '',
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed', err });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
    });

    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token, user });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', err });
  }
});

module.exports = router;
