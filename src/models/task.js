const mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');

let counter = 1;
let CountedId = {type: Number, default: () => counter++};

const schema = new mongoose.Schema({
  // _id: {
  //   type: String,
  //   uppercase: true,
  //   // alias: 'code' // virtual `code` property
  // },
  id:{
    type: Number,
  },
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
    default: '',
    required: true
  },
  __v: { type: Number, select: false }
},
{
    timestamps:true,
    toJSON: {
        virtuals: true
      },
   
});

// schema.virtual('code').get(function() {
//     return this._id;
//   });
const model = mongoose.model('Task', schema);

module.exports = model;