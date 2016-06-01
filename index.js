var express = require('express'),
app = express();

app.set('view engine', 'ejs');

//mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/breed');
var breed = require('./models/breed');

app.use('/api/breed', require('./controllers/breed'));


//test, added wolf breed
var wolf = new breed({
  name: 'wolf',
  size: 'large',
  lifespan: 10,
  training: 'Hard',
  shedding: 5,
  energylevel: 5
});

var dachshund = new breed({
	name: 'Dachshund',
	size: 'small',
	lifespan: 12,
	training: 'Easy',
	shedding: 3,
	energylevel: 3
})


//pulls from database and returns with data
app.get('/', function(req, res) {
  res.send(dachshund.hiDog());
});

app.listen(process.env.PORT || 3000);
