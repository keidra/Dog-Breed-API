var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//   res.render('index');
// });

//mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/breed');
var Breed = require('./models/breed');

app.use('/api/breed', require('./controllers/breed'));

//test, added wolf breed
var wolf = new Breed({
  name: 'wolf',
  size: 'large',
  lifespan: 10,
  training: 'Hard',
  shedding: 5,
  energylevel: 5
});

//pulls from database and returns with data
app.get('/', function(req, res) {
  res.send(wolf.hiDog());
});

app.listen(process.env.PORT || 3000);