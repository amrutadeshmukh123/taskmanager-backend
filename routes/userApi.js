const express = require('express')
const router = express.Router();
const Users = require('../model/user')


router.post('/addTask', async (req, res) => {
    try {
        const user = new Users(req.body)
        console.log(user)
        await user.save()
        res.send({ status: true, message: "User added successfully !!" })
    } catch(error){
        res.send({ status: false, message:error.message})
    }
})

router.get('/getTask', async (req, res) => {
    try {
        const users = await Users.find()
        res.send({ status: true, message:users})

    } catch(error){
        res.send({ status: false, message:error.message})
    }
})

router.get('/getTask/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await Users.findById(id,req.body,{new:true})
        if(!user){
            res.send({status:false,message:"User not found !!"})
        } else{
            res.send({ status: true, message:user })
        }
        
    } catch(error){
        res.send({ status: false, message:error.message})
    }
})


router.put('/updateTask/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await Users.findByIdAndUpdate(id,req.body,{new:true})
        if(!user){
            res.send({status:false,message:"User not found !!"})
        } else{
            res.send({ status: true, message: "User updated successfully !!" })
        }
        
    } catch(error){
        res.send({ status: false, message:error.message})
    }
})

router.delete('/deleteTask/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await Users.findByIdAndDelete(id)
        if(!user){
            res.send({status:false,message:"User not found !!"})
        } else{
            res.send({ status: true, message: "User deleted successfully !!" })
        }
        
    } catch(error){
        res.send({ status: false, message:error.message})
    }
})


module.exports = router