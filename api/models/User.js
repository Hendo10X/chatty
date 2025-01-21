const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 20,
  } ,
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  }
},{timestamps: true})

 const UserModel = mongoose.model('User',UserSchema);

 module.exports = UserModel;