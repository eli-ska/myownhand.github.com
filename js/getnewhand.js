// var express = require('express')
//   , stylus = require('stylus')
//   , nib = require('nib')


//   var app = express()
// function compile(str, path) {
//   return stylus(str)
//     .set('filename', path)
//     .use(nib())
// }
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jade')
// app.use(express.logger('dev'))
// app.use(stylus.middleware(
//   { src: __dirname + '/public'
//   , compile: compile
//   }
// ))
// app.use(express.static(__dirname + '/public'))

// app.get('/', function (req, res) {
//   res.end('Hi there!')
// })
// app.listen(3000)

var http = require('http');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>Euro 2012 teams</h1>\n' + 
    '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' + 
    '\n\n');
  res.end();
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');