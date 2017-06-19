const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Stories = require('../models/story');

router.get('/stories',(req, res, next) => {
  Stories.getAllStories(req, (err, story) => {
    res.json({stories: story});
  });
});

module.exports = router;
