const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dob:{
    type:Date,
    required:true
  },
  email: {
    type: String,
    required: true
  },
  phone:{
    type: String,
    required:true
  }
});

const model = mongoose.model('Seeker', schema);

module.exports = model;
