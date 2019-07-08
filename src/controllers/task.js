// const tasks =[{'catgory':"cleaning", "due":"01/06/19"}]
let currentId =1;
const Task = require('../models/task');
async function addTask(req,res){
    var id = res.length
    const{category,title,description} =req.body
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