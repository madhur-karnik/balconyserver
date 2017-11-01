var express = require("express");
var bodyParser = require("body-parser");
var app;

app = module.exports = express();
app.set('trust proxy',1);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req, res) {
    res.send("Hello World");
});

var server = app.listen(3001, function() {
    console.log("Magic happenning on port 3001");
});
