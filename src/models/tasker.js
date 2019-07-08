const taskers =[{'name':"yyy", "address":"test1"}]

function getAllTasker(){
    return JSON.parse(JSON.stringify(taskers))
}

module.exports ={
    getAllTasker
}