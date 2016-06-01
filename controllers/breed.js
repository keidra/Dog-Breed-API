var express = require('express');
var Airplane = require('../models/breed');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Breed.find(function(err, breed) {
      if (err) return res.status(500).send(err);
      res.send(breed);
    });
  })
  // .post(function(req, res) {
  //   Airplane.create(req.body, function(err, airplane) {
  //     if (err) return res.status(500).send(err);
  //     res.send(airplane);
  //   });
  // });

router.route('/:id')
  .get(function(req, res) {
    Breed.findById(req.params.id, function(err, breed) {
      if (err) return res.status(500).send(err);
      res.send(breed);
    });
  })
  // .put(function(req, res) {
  //   Airplane.findByIdAndUpdate(req.params.id, req.body, function(err) {
  //     if (err) return res.status(500).send(err);
  //     res.send({'message': 'success'});
  //   });
  // })
  // .delete(function(req, res) {
  //   Airplane.findByIdAndRemove(req.params.id, function(err) {
  //     if (err) return res.status(500).send(err);
  //     res.send({'message': 'success'});
  //   });
  // });

module.exports = router;