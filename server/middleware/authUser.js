const jwt = require('jsonwebtoken')
require('dotenv').config()

const authUser = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1]
    try {
      const decoded = jwt.verify(token, process.env.SECRETKEY)
      req.body.userRef = decoded.id;
      return next()
    } catch (error) {
      res.json({ message: error.message })
      return
    }
  }
  res.status(403).json({ message: 'You don\'t have access to do this operation. Please login and try again' })
}

module.exports = authUser