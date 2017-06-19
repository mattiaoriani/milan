const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  year: {
    type: Number,
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

const Story = module.exports = mongoose.model('Story', UserSchema);

module.exports.getStoryByYear = function(year, callback){
  const query = {year: year}
  Story.findOne(query, callback);
}

module.exports.getUserByName = function(name, callback){
  const query = {name: name}
  Story.findOne(query, callback);
}

module.exports.getAllStories = function(bo, callback){
  Story.find({},callback);
}
