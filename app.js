var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({
    ipaddress: ip
  });
});

app.listen(8080, function () {
  console.log('Server running on port 8080');
});
