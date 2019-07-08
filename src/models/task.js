const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  __v: { type: Number, select: false }
},
{
    timestamps:true,
    toJSON: {
        virtuals: true
      },
   
});

schema.virtual('code').get(function() {
    return this._id;
  });
const model = mongoose.model('Task', schema);

module.exports = model;