const Seeker = require('../models/seeker');

async function addSeeker(req,res){
  const {firstName,lastName,dob,email,phone} =req.body;
  const seeker = new Seeker({
    firstName,
    lastName,
    dob,
    email,
    phone
  })
  await seeker.save();
  return res.json(seeker);
}

async function getAllSeekers(req, res) {
  const seekers = await Seeker.find().exec();
  return res.json(seekers);
}

function getSeeker(req,res){
}

function updateSeeker(req, res) {}

function deleteSeeker(req, res) {}



module.exports = {
  addSeeker,
  getAllSeekers,
  getSeeker,
  updateSeeker,
  deleteSeeker
};