const tasks =[{'catgory':"cleaning", "due":"01/06/19"}]

function getAllTask(){
    return JSON.parse(JSON.stringify(tasks))
}

module.exports ={
    getAllTask
}