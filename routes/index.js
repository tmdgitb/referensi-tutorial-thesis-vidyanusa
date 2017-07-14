var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //1.engine html,2.variabel
});

router.get('/daftar_pengguna', userController.daftar_pengguna);


module.exports = router;
