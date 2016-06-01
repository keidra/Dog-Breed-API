var mongoose = require('mongoose');

var BreedSchema = new mongoose.Schema({
  name: String,
  //size is XS, S, M, L, XL
  size: String,
  //image is a url
  image: String, 
  //lifespan is the number of years
  lifespan: Number,
	//training is easy, medium, or hard
  training: String,
  //shedding is on a scale of 1-5
  shedding: Number,
  //energylevel is on a scale of 1-5
  energylevel: Number
});

module.exports = mongoose.model('Breed', BreedSchema);
