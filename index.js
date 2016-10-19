var express = require('express');
var pokemon = require('pokemon-random-name');
var app = express();
const exec = require('child_process').exec;

app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.send('Yo '+pokemon())
})

app.get('/figlet', function(req, res){
  var p = pokemon();
  exec('figlet '+p, (error, stdout, stderr) => {
    if (error) {
      res.status(400).send(error);
      return;
    }
    res.send(stdout);
  });
})

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('I am listening on port '+port)
})
