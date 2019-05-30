const taskModel = require('../models/task');

function getAllTask(req, res) {
  const tasks = taskModel.getAllTask();
  return res.json(tasks);
}

module.exports = {
    getAllTask,
};