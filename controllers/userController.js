//Import model
var users = require('../models/userModel');

exports.daftar_pengguna = function(req,res) {//fungsi

  users.find({})//Sama kaya select di mySQL
    .exec(function (err, results) {
      if(err){
        res.send(err)
      }else{
        res.json(results)//response atau kembalian JSON
      }
    });

}
