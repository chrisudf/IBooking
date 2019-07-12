const Task = require('../models/task');
const Seeker = require('../models/seeker');


async function addTask(req,res){
    // var id = res.length
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
    return res.json(task);
}

async function getAllTasks(req,res){
    const tasks = await Task.find();
    return res.json(tasks);
}

async function getTask(req,res){
  const {id: code} = req.params;
  const task =await Task.findById(code).populate('seekers', 'firstName lastName email phone').exec();

  if(!task){
    return res.status(404).json('task not found')
  };
  return res.json(task);
    
}
async function updateTask(req, res) {
  const { id: code } = req.params;
  const { category, title, description } = req.body;
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

async function deleteTask(req,res) {
  const { id: code } = req.params;
  const task = await Task.findByIdAndDelete(code);
  if (!task) {
    return res.status(404).json('task not found');
  }
  await Seeker.updateMany(
    {
      tasks: task._id
    },
    {
      $pull: {
        tasks: task._id
      }
    }
  );
  return res.sendStatus(200);
}

module.exports ={
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}