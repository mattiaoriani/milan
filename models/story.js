const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  year: {
    initial:{
      type: Number,
      required: true
    },
    final: {
      type: Number
    }
  },
  description: {
    small: {
      type:  String,
      required: true
    },
    long: {
      type:  String,
      required: true
    },
  },
  photoPath: {
    normal:{
      type: String
    },
    small: {
      type: String
    },
  },
  additionalPhotoPath: [{
    path: {
      type: String
    },
    description: {
      type: String
    }
  }],
  mediaPath: {
    type: String
  }
});

const Story = module.exports = mongoose.model('Story', UserSchema);

module.exports.getStoryByYear = function(year, callback){
  const query = {year: year}
  Story.findOne(query, callback);
}

module.exports.addStory = function(newStory, callback){
      newStory.save(function(err, newStory){
        if(err) return console.error(err);
      });
}

module.exports.getUserByName = function(name, callback){
  const query = {name: name}
  Story.findOne(query, callback);
}

module.exports.getAllStories = function(bo, callback){
  Story.find({},callback).sort({"year.initial": 'desc'}).exec(function(err, docs) {});
}
