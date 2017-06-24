const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  coverImg: {
    type: String,
    required: true
  },
  trophiesWon: [{
    year:{
      type: Number
    },
    description: {
      type: String
    },
    photoList: [{
      path:{
        type: String
      },
      description: {
        type: String
      }
    }],
    mediaPath: {
      type: String
    }
  }]
});

const Trophy = module.exports = mongoose.model('Trophy', UserSchema);

module.exports.getTrophyByDate = function(dateWin, callback){
  const query = {dateWin: dateWin}
  Trophy.findOne(query, callback);
}

module.exports.addTrophy = function(newTrophy, callback){
      newTrophy.save(function(err, newTrophy){
        if(err) return console.error(err);
      });
}

module.exports.getAllTrophies = function(bo, callback){
  Trophy.find({},callback);
}
