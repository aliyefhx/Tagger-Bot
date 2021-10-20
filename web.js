var express = require('express');
var packageInfo = require('./package.json');
var bodyParser = require('body-parser');
var token = '2085679107:AAHc2PR6KzxYJ1ZfPP8uoW6vns_4wqfpO6E'; 
var app = express();
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});


var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);

});

module.exports = function (bot) {
app.post('/' + token, function (req, res) {
  bot.processUpdate(req.body);
  res.sendStatus(200);
	});
};
