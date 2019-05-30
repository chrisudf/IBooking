const seekerModel = require('../models/seeker');

function getAllSeeker(req, res) {
  const seekers = seekerModel.getAllSeeker();
  return res.json(seekers);
}

module.exports = {
    getAllSeeker,
};