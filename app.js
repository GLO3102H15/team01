var express = require('express');
var app = express();

app.use(express.static(__dirname+ '/app'));
var server = app.listen(process.env.PORT || 80);