
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'done']
    }],
    default: 'pending'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);