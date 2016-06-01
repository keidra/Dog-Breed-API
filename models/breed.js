var mongoose = require('mongoose');

//set up schema
var breedSchema = new mongoose.Schema({
  name: String,
  size: String,
  lifespan: Number,
  training: String,
  shedding: Number,
  energylevel: Number
});

breedSchema.methods.hiDog = function() {
  return "Hi " + this.name ;
};

var breed = mongoose.model('breed', breedSchema);

// make this available to our other files
module.exports = breed;