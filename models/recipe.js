var mongoose = require('mongoose');

var BreedSchema = new mongoose.Schema({
  name: String,
  size: String,
  image: String, 
  lifespan: Number,
  training: String,
  shedding: Number,
  energylevel: Number
});

module.exports = mongoose.model('Breed', BreedSchema);
