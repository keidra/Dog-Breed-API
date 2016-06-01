var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//   res.render('index');
// });

//mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/breed');
var breed = require('./models/breed');

//pulls from database and returns with data
app.get('/', function(req, res) {
  res.send(wolf.hiDog());
});

app.listen(process.env.PORT || 3000);