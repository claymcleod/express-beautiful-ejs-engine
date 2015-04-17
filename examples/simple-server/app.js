var express = require('express');
var app = express();

// Overwrite default EJS engine with this one
app.engine('ejs', require('express-beautiful-ejs-engine'));
 
// Set default engine to our engine
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {
  	title: 'Hello world',
  	body: 'Thanks for using EBEJS!'
  });
});

var server = app.listen(3000);