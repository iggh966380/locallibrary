var express = require('express');
var router = express.Router();

// home
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// about
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;
