'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Students');


exports.crete_student = function(req, res) {
  var new_task = new Task(req.body);
  new_task.submitedon = new Date();
  console.log(req.body)
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.all_students = function(req, res) {
    Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.students = function(req, res) {
    Task.find({_id: req.param('id')}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.edit_students = function(req, res) {
    console.log(req.param('id'))
    console.log(req.files[0])
    var data = req.body;
    if(req.body.avatar != 'null'){
      var reqFiles;
      const url = req.protocol + '://' + req.get('host')
      reqFiles=url + '/uploads/' + req.files[0].filename;
      console.log(reqFiles);
      data.avatar = reqFiles;
    }
    else if(req.body.avatar != undefined){
        delete data["avatar"];
    }
    else{
        delete data["avatar"];
    }
    var new_task = new Task(req.body);
    req.body.submitedon = new Date();
    Task.updateOne({_id: req.param('id')}, {$set: data},function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.deletestudents = function(req, res) {
    Task.deleteMany({_id: req.param('id')}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };