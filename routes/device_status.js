var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sys = require('sys');
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) {
    res.json({
      stdout: stdout,
      error: error,
      stderr: stderr
    });
  }
  exec("ls -la", puts);
});

module.exports = router;
