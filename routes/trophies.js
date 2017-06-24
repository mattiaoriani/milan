const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Trophies = require('../models/trophy');

router.post('/registerTrophy', (req, res, next) => {
  let newTrophy = new Trophies({
    name:req.body.name,
    coverImg: req.body.coverImg,
    trophiesWon: req.body.trophiesWon
  });

  Trophies.addTrophy(newTrophy, (err, trophy) => {
    if(err){
      res.json({success: false, msg:'Failed to register newStory'});
    } else {
      res.json({success: true, msg:'newStory registered'});
    }
  });
});

router.get('/trophies',(req, res, next) => {
  Trophies.getAllTrophies(req, (err, trophy) => {
    res.json({trophies: trophy});
  });
});


module.exports = router;
