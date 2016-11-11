const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const first = new Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model('first', first);