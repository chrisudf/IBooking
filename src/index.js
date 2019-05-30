const express = require ('express')
const routes = require('./routes')

const app = express()

app.use(express.json())

app.use('/v1',routes)

// const seekers =[{'name':"zzz", "address":"test"}]
// const taskers =[{'name':"yyy", "address":"test1"}]
// const task =[{'catgory':"cleaning", "due":"01/06/19"}]


// app.get('/seeker',(req,res)=>{
//     res.json(seekers)
// })

// app.get('/tasker',(req,res)=>{
//   res.json(taskers)
// })

// app.get('/task',(req,res)=>{
//   res.json(task)
// })

app.listen(8888,()=>{
    console.log('server listening to port 8888')
})