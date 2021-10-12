const bcrypt = require('bcrypt')
const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(403).json({ message: 'That email doesn\'t exist' })
      return;
    }
    bcrypt.compare(password, user.password).then((result) => {
      if (result) {
        const token = jwt.sign({ id: user._id }, process.env.SECRETKEY, { expiresIn: '1h' })
        return res.status(200).json(token)
      }
      return res.status(403).json({ message: 'Wrong password, try something else!' })
    });
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }

}

module.exports = login;