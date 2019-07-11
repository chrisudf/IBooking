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

async function getSeeker(req,res){
  const {id} = req.params;
  const seeker = await Seeker.findById(id);
  if (!seeker) {
    return res.status(404).json('seeker not found');
  }
  return res.json(seeker);
}

async function updateSeeker(req, res) {
  const { id } = req.params;
  const { firstName, lastName, dob, email, phone } = req.body;
  const newSeeker = await Seeker.findByIdAndUpdate(
    id,
    { firstName, lastName, dob, email, phone },
    {
      new: true // return the updated object
      // runValidators: true // run validator against new value
    }
  );
  if (!newSeeker) {
    return res.status(404).json('seeker not found');
  }
  return res.json(newSeeker);
}

async function deleteSeeker(req, res) {
  const { id } = req.params;
  const seeker = await Seeker.findByIdAndDelete(id);
  if (!seeker) {
    return res.status(404).json('seeker not found');
  }
  return res.sendStatus(200);

}



module.exports = {
  addSeeker,
  getAllSeekers,
  getSeeker,
  updateSeeker,
  deleteSeeker
};