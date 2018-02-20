//var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var port = 3000;
var index = require('./routes/index');

var tasks = require('./routes/tasks');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
//Body Parser MW
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', index);

app.use('/api', tasks);


app.listen(port, function(){
    console.log('Server started on port ' + port);
});

//Connect MongoDB
mongoose.connect('mongodb://localhost:27017/')