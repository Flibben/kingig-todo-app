const express = require('express');
const authUser = require('../middleware/authUser');

const router = express.Router();

router.get('/', authUser, (req, res) => {
  res.json({ auth: true });
});

module.exports = router;
