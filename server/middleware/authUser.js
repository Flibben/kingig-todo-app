const jwt = require('jsonwebtoken')
require('dotenv').config()

const authUser = (req, res, next) => {
  const token
  if (req.body.token) {
    token = req.body.token
    const decoded = jwt.verify(token, process.env.SECRETKEY)
    //add try/catch
  }
}