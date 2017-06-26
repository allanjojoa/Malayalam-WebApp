var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'ui','main.html'))
});

app.get('/ui/js/boostrap.min.js',function(req,res){
  res.sendFile(path.join(__dirname,'ui','js','bootstrap.min.js'))
});
app.get('/ui/css/bootstrap.min.css',function(req,res){
  res.sendFile(path.join(__dirname,'ui','css','bootstrap.min.css'))
});
app.get('/ui/js/jquery.min.js',function(req,res){
  res.sendFile(path.join(__dirname,'ui','js','jquery.min.js'))
})

var port = 8080;
app.listen(8080, function () {
  console.log(`Port ${port}!`);
});
