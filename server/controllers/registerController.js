const bcrypt = require('bcrypt');
const UserModel = require('../models/user');

const register = async (req, res) => {
  const {
    fullName, displayName, password, email,
  } = req.body;

  try {
    if (password.length < 6) {
      res.status(403).json({ message: 'Password must be at least 6 characters long.' });
      return;
    }
    if (fullName.length > 50) {
      res.status(403).json({ message: 'Full name can\'t be longer than 50 characters.' });
      return;
    }
    if (displayName.length < 1) {
      res.status(403).json({ message: 'Display name must be at least 1 character.' });
      return;
    }
    if (email.length < 6) {
      res.status(403).json({ message: 'Please enter a valid email?' });
      return;
    }
    const dbEmail = await UserModel.findOne({ email });
    if (dbEmail) {
      res.status(500).json({ message: 'A user with that email already exists.' });
      return;
    }
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }

  bcrypt.hash(password, 10).then(async (hash) => {
    const user = new UserModel({
      fullName, displayName, password: hash, email,
    });
    try {
      await user.save();
      res.status(200).json({ message: 'Success!' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

module.exports = register;
