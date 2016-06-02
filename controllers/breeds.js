var express = require('express');
var Breed = require('../models/breed');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Breed.find(function(err, breeds) {
      if (err) return res.status(500).send(err);
      res.send(breeds);
    });
  })
  .post(function(req, res) {
    Breed.create(req.body, function(err, breed) {
      if (err) return res.status(500).send(err);
      res.send(breed);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Breed.findById(req.params.id, function(err, breed) {
      if (err) return res.status(500).send(err);
      res.send(breed);
    });
  })
  .put(function(req, res) {
    Breed.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Breed.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;

