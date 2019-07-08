const taskerModel = require('../models/tasker');

function getAllTasker(req, res) {
  const taskers = taskerModel.getAllTasker();
  return res.json(taskers);
}

module.exports = {
    getAllTasker,
};