var mongoose = require('mongoose');//Import library

var Schema = mongoose.Schema;//

var UserSchema = Schema({
  email: {type: String, min: 1, max: 100, required: true},
  sandi: {type: String, min: 1, max: 100, required: true}
},{collection: 'users'});

//Export model
module.exports = mongoose.model('users', UserSchema);
