var mongoose = require('mongoose');

//set up schema
var BreedSchema = new mongoose.Schema({
  name: String,
  size: String,
  lifespan: Number,
  training: String,
  shedding: Number,
  energylevel: Number
});

BreedSchema.methods.hiDog = function() {
  return "Hi " + this.name ;
};


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

// var dachshund = new breed({
// 	name: 'Dachshund',
// 	size: 'small',
// 	lifespan: 12,
// 	training: 'Easy',
// 	shedding: 3,
// 	energylevel: 3
// })

// make this available to our other files
module.exports = mongoose.model('Breed', BreedSchema);