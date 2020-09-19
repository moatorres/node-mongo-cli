const mongoose = require('mongoose')

const cameraSchema = mongoose.Schema({
  model: String,
  vendor: String,
  owner: String,
  highdef: Boolean,
  active: Boolean,
  location: String,
})

module.exports = mongoose.model('Camera', cameraSchema)
