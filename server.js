/**
 * Created by successive on 7/10/15.
 */


var express = require('express');
var path    = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../ng-boilerplate/build')));
app.use(express.static(path.join(__dirname, '../ng-boilerplate/')));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('App listening at ' +  port);
});
//var http = require('http').Server(app);
//http.listen(3000);
