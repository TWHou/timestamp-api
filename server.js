var express = require("express");
var app = express();
var path = require("path");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/:string', function (req, res) {
  var str = req.params.string.replace(/%20/g, " ");
  var unix = parseInt(str, 10) || Date.parse(str)/1000;
  var natural = new Date(unix*1000).toDateString() || str;
  var output = { unix: unix, natural: natural };
  res.json(output);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});