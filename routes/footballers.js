const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Footballer = require('../models/footballer');

router.post('/registerFootballer', (req, res, next) => {
  let newFootballer = new Footballer({
    name:req.body.name,
    surname: req.body.surname,
    dateBorn:req.body.dateBorn,
    nationality: req.body.nationality,
    numberShirt: req.body.numberShirt,
    description: req.body.description,
    photoPath: req.body.photoPath,
    coverImg: req.body.coverImg,
    mediaPath: req.body.mediaPath,
    statics:req.body.statics,
    trophiesWon:req.body.trophiesWon
  });

  Footballer.addFootballer(newFootballer, (err, footballer) => {
    if(err){
      res.json({success: false, msg:'Failed to register newFootballer'});
    } else {
      res.json({success: true, msg:'newFootballer registered'});
    }
  });
});

router.get('/footballerInfo/:surname',(req, res, next) => {
  Footballer.getFootballerBySurname(req.params.surname, (err, user) => {
    res.json({footballer: user});
  });
});

router.get('/footballerInfo',(req, res, next) => {
  Footballer.getAllFootballers(req, (err, user) => {
    res.json({footballer: user});
  });
});

module.exports = router;
