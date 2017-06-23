const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Stories = require('../models/story');

router.post('/registerStory', (req, res, next) => {
  let newStory = new Stories({
    name:req.body.name,
    year: req.body.year,
    description: req.body.description,
    photoPath: req.body.photoPath,
    additionalPhotoPath: req.body.additionalPhotoPath,
    mediaPath: req.body.mediaPath
  });

  Stories.addStory(newStory, (err, story) => {
    if(err){
      res.json({success: false, msg:'Failed to register newStory'});
    } else {
      res.json({success: true, msg:'newStory registered'});
    }
  });
});

router.get('/stories',(req, res, next) => {
  Stories.getAllStories(req, (err, story) => {
    res.json({stories: story});
  });
});

module.exports = router;
