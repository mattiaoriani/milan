const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  dateWin: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photoPath: {
    type: String,
    required: true
  },
  mediaPath: {
    type: String
  }
});

const Trophy = module.exports = mongoose.model('Trophy', UserSchema);

module.exports.getTrophyByDate = function(dateWin, callback){
  const query = {dateWin: dateWin}
  Trophy.findOne(query, callback);
}

module.exports.getUserByName = function(name, callback){
  const query = {name: name}
  Trophy.findOne(query, callback);
}

module.exports.getAllTrophies = function(bo, callback){
  Trophy.find({},callback);
}
