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

// mongoose.connect('mongodb://localhost/breed');
// var breed = require('./models/breed');

//test, added wolf breed
var wolf = new breed({
  name: 'wolf',
  size: 'large',
  lifespan: 10,
  training: 'Hard',
  shedding: 5,
  energylevel: 5
});

// make this available to our other files
module.exports = mongoose.model('Breed', breedSchema);