var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(3000);