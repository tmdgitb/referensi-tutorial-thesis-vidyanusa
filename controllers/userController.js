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

exports.tambah_pengguna = function (req, res) {//menambahkan pengguna pada mongoDB

  var inputan_pengguna = new users({
    email:req.body.email,
    sandi:req.body.sandi
  })

  inputan_pengguna.save(function (err) {
    if(err){
      res.json(err)
    }else{
      res.json({pesan:'Pengguna berhasil ditambahkan'})
    }
  })

}
