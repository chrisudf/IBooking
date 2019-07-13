const Seeker = require('../models/seeker');
const Task = require('../models/task');

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
  const seeker = await Seeker.findById(id).populate('tasks', 'code title category description').exec();
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
  // clean the refs
  await Task.updateMany(
    { _id: { $in: seeker.tasks } },
    { $pull: { seekers: seeker._id } }
  ).exec();
  return res.sendStatus(200);
}

async function addTask(req, res) {
  const { id } = req.params;
  const seeker = await Seeker.findById(id).exec();
  if (!seeker) {
    return res.status(404).json('seeker not found');
  }
  const{code,category,title,description} =req.body;
  const existingTask = await Task.findById(code).exec();
  if (existingTask) {
    return res.status(400).json('Duplicate Task code');
  };
  const task= new Task({
      code,
      category,
      title,
      description,
  });
  await task.save();
  seeker.tasks.addToSet(task._id);
  task.seekers.addToSet(seeker._id);
  await task.save();
  await seeker.save();
  return res.json(seeker);
}

async function getAllTasks(req,res){
  const { id } = req.params;
  const seeker = await Seeker.findById(id).exec();
  if (!seeker) {
    return res.status(404).json('seeker not found');
  }
  const tasks = await Task.find();
  return res.json(tasks);
}

async function getTask(req,res){
  const { id, code } = req.params;
  const seeker = await Seeker.findById(id).exec();
  const task = await Task.findById(code).exec();
  if (!seeker || !task) {
    return res.status(404).json('seeker or task not found');
  }
  // const task =await Task.findById(code).populate('seekers', 'firstName lastName email phone').exec();
  return res.json(task);
}

async function updateTask(req, res) {
  const { id, code } = req.params;
  const { category, title, description } = req.body;
  const seeker = await Seeker.findById(id).exec();
  const task = await Task.findById(code).exec();
  if (!seeker || !task) {
    return res.status(404).json('seeker or task not found');
  }
  const newTask = await Task.findByIdAndUpdate(
    code,
    { category, title, description },
    {
      new: true // return the updated object
      // runValidators: true // run validator against new value
    }
  );
  if (!newTask) {
    return res.status(404).json('task not found');
  }
  return res.json(newTask);
}

async function deleteTask(req, res) {
  const { id, code } = req.params;
  const seeker = await Seeker.findById(id).exec();
  const task = await Task.findById(code).exec();
  if (!seeker || !task) {
    return res.status(404).json('seeker or task not found');
  }
  const oldCount = seeker.tasks.length;
  seeker.tasks.pull(task._id);
  if (seeker.tasks.length === oldCount) {
    return res.status(404).json('Requirement does not exist');
  }
  task.seekers.pull(seeker._id);
  await task.save();
  await seeker.save();
  return res.json(seeker);
}

module.exports = {
  addSeeker,
  getAllSeekers,
  getSeeker,
  updateSeeker,
  deleteSeeker,
  addTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask
};