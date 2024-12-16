const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    taskName:{type:String,required:true},
    taskStatus:{type:String,required:true,unique:true}
})


module.exports = mongoose.model('Users',userSchema)