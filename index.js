const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userApi')


const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use('/api',userRoutes)


mongoose.connect('mongodb+srv://amruta:i6GGEm8Mi8cZYaZ8@test2.zh7cv.mongodb.net/api/',{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected !!")
}).catch(()=>{
    console.log("Error while connecting the database:"+error.message)
})


server.listen(8055,()=>{
    console.log("Server started listening at port no 8055")
})