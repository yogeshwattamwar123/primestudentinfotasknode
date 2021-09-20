'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  studentname: {
    type: String
  },
  fathername: {
    type: String
  },
  dateofbirth: {
    type: String
  },
  courseapplied: {
    type: String
  },
  mobilenumber: {
    type: String
  },
  emailid: {
    type: String
  },
  address: {
    type: String
  },
  submitedon: {
    type: Date
  },
  gender: {
    type: String
  },
  avatar: {
    type: String
  }
});

module.exports = mongoose.model('Students', TaskSchema);