const seekers =[{'name':"zzz", "address":"test"}]

function getAllSeeker(){
    return JSON.parse(JSON.stringify(seekers))
}

module.exports ={
    getAllSeeker
}