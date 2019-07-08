const Task = require('../models/task');
async function addTask(req,res){
    // var id = res.length
    const{id,category,title,description} =req.body
    const task= new Task({
        id,
        category,
        title,
        description,
    })
    await task.save()
    return res.json(task)
}

async function getAllTasks(req,res){
    const tasks = await Task.find()
    return res.json(tasks)
}

async function getTask(req,res){
  const id = req.params
  const task =await Task.findById(id)

  if(!task){
    return res.status(404).json('task not found')
  }
  return res.json(task)
    
}
function updateTask(req, res) {}

function deleteTask(req, res) {}
module.exports ={
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}