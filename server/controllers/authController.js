const express = require('express');
const UserModel = require('../models/user');

const register = async (req, res) => {

  const { fullName, displayName, password, mail } = req.body;
  console.log(displayName.length)
  if (password.length < 6) {
    res.status(400).send('Password must be at least 6 characters long.')
    return
  }
  if (fullName.length > 50) {
    res.status(400).send(`Full name can't be longer than 50 characters.`)
    return
  }
  if (displayName.length < 1) {
    res.status(400).send('Display name must be at least 1 character.')
    return
  }
  if (mail.length < 6) {
    res.status(400).send('Is that REALLY a valid email?')
    return
  }

  res.status(200).send('Success!')
}

const login = async (req, res) => {
  res.send('fett äkta login')
}

module.exports = { register, login };