const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  dateBorn: {
    year:{
      type: Number
    },
    month: {
      type: Number
    },
    day: {
      type: Number
    },
  },
  nationality: {
    type: String
  },
  numberShirt: {
    type: Number
  },
  description: {
    type: String,
    required: true
  },
  coverImg: {
    type: String,
    required: true
  },
  photoPath: {
    normal:{
      type: String
    },
    small: {
      type: String
    },
  },
  mediaPath: {
    type: String
  },
  statics: [{
    year:{
      type: String
    },
    apperances: {
      type: Number
    },
    goals: {
      type: Number
    },
    assists: {
      type: Number
    }
  }],
  trophiesWon: [{
    name: {
      type: String
    },
    numberofWin: {
      type: Number
    }
  }]
});

const Footballer = module.exports = mongoose.model('Footballer', UserSchema);

module.exports.getFootballerByDate = function(dateBorn, callback){
  const query = {dateBorn: dateBorn}
  Footballer.findOne(query, callback);
}

module.exports.addFootballer = function(newFootballer, callback){
      newFootballer.save(function(err, newFootballer){
        if(err) return console.error(err);
      });
}

module.exports.getFootballerBySurname = function(surname, callback){
  const query = {surname: surname}
  Footballer.findOne(query, callback);
}

module.exports.getAllFootballers = function(surname, callback){
  Footballer.find({},callback);
}
