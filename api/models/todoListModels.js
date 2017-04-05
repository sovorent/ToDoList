
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    Required: true
  },
  contents: {
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