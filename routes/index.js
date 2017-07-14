var express = require('express');
var router = express.Router();

var User = require('../models/userModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //1.engine html,2.variabel
});

module.exports = router;
