var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');//panggil controller

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expres' });
  //1.engine html,2.variabel
});

router.get('/daftar_pengguna', userController.daftar_pengguna);

router.post('/tambah_pengguna', userController.tambah_pengguna);

module.exports = router;
