const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Trophies = require('../models/trophy');

router.get('/trophies',(req, res, next) => {
  Trophies.getAllTrophies(req, (err, trophy) => {
    res.json({trophies: trophy});
  });
});


module.exports = router;
