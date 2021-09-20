'use strict';

const fs = require("fs");

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
}); 
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            if (!fs.existsSync('./uploads')) {
                fs.mkdirSync('./uploads');
            }
            callback(null, true);
          } else {
            callback(null, false);
            return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
          }
        console.log("1");
      callback(null, true)
    }
});

module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.post('/students/addstudents', upload.array('avatar', 1), todoList.crete_student);
  // app.route('/students/addstudents').post(todoList.crete_student);
  app.route('/students/allstudents').get(todoList.all_students);
  app.route('/students/students/:id').get(todoList.students);
  app.put('/students/editstudents/:id', upload.array('avatar', 1), todoList.edit_students);
// app.route('/students/editstudents/:id').put(todoList.edit_students);
  app.route('/students/deletestudents/:id').delete(todoList.deletestudents);
};