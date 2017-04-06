'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var prefix_root_url = '/api/v1.0/' ;

  app.route(prefix_root_url + 'tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)
    .delete(todoList.delete_all_tasks);

  app.route(prefix_root_url + 'tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .patch(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};