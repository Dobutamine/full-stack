const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now }
})

const User = mongoose.model('Users', userSchema)  // returns a class

module.exports = User