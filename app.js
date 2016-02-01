var express = require('express');
var acceptLanguage = require('accept-language');
var app = express();

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var language = acceptLanguage.parse(req.headers["accept-language"]);
  res.json({
    ipaddress: ip,
    language: language[0].language
  });
});

app.listen(8080, function () {
  console.log('Server running on port 8080');
});
