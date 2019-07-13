const Tasker = require('../models/tasker');

async function getAllTaskers(req, res) {
  const taskers = await Tasker.find().exec();
  return res.json(taskers);
}

async function addTasker(req,res){
  const {firstName,lastName,dob,email,phone,description} =req.body;
  const tasker = new Tasker({
    firstName,
    lastName,
    dob,
    email,
    phone,
    description
  })
  await tasker.save();
  return res.json(tasker);
}

async function getTasker(req,res){
  const {id} = req.params;
  const tasker = await Tasker.findById(id);
  if (!tasker) {
    return res.status(404).json('tasker not found');
  }
  return res.json(tasker);
}

async function updateTasker(req, res) {
  const { id } = req.params;
  const { firstName, lastName, dob, email, phone, description } = req.body;
  const newTasker = await Tasker.findByIdAndUpdate(
    id,
    { firstName, lastName, dob, email, phone, description },
    {
      new: true // return the updated object
      // runValidators: true // run validator against new value
    }
  );
  if (!newTasker) {
    return res.status(404).json('tasker not found');
  }
  return res.json(newTasker);
}

async function deleteTasker(req, res) {
  const { id } = req.params;
  const tasker = await Tasker.findByIdAndDelete(id);
  if (!tasker) {
    return res.status(404).json('tasker not found');
  }
  return res.sendStatus(200);

}

module.exports = {
  addTasker,
  getAllTaskers,
  getTasker,
  updateTasker,
  deleteTasker
};