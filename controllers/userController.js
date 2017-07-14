//Import model
var userModel = require('../models/userModel');

exports.daftar_pengguna = function(req,res) {
  User.find({'profil.username':req.body.username})//inputan.username
    .exec(function (err, results) {
      res.json(results)
    });
}
