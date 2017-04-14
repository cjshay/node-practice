var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var messages = [];
  var exec = require('child_process').exec;
  function add(error, stdout, stderr) {
    messages.push(stdout);
    messages.push(error);
    messages.push(stderr);
  }

  exec(`node ${__dirname}/print-device-acr.js`, add);
  exec(`node ${__dirname}/print-device-acr.js`, add);
  exec(`node ${__dirname}/print-device-acr.js`, add);
  exec(`node ${__dirname}/print-device-acr.js`, add);
  exec(`node ${__dirname}/print-device-acr.js`, add);
  res.json(messages);
});

module.exports = router;
