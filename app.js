var express = require('express');
var acceptLanguage = require('accept-language');
var userAgent = require('express-useragent');
var app = express();

app.use(userAgent.express());

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var language = acceptLanguage.parse(req.headers["accept-language"]);
  var browser = req.useragent.os;
  res.json({
    ipaddress: ip,
    language: language[0].language,
    browser: browser
  });
});

app.listen(8080, function () {
  console.log('Server running on port 8080');
});
