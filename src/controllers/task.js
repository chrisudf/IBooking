// const tasks =[{'catgory':"cleaning", "due":"01/06/19"}]
const Task = require('../models/task');
async function addTask(req,res){
    const{category,title,description} =req.body
    const task= new Task({
        category,
        title,
        description
    })
    await task.save()
    return res.json(task)
}

async function getAllTasks(req,res){
    const tasks = await Task.find()
    return res.json(tasks)
}

function getTask(req,res){
    
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