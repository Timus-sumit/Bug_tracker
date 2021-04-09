const express = require('express')
const router = new express.Router()
const User = require('../models/users')



router.post('/users',async (req,res)=>{
    const user = new User(req.body)
    //
    try {
        await user.save()
        res.status(201).send({user})
    } catch (error) {
        res.status(400).send(error)
    }

    
})
router.get('/users',async (req,res)=>{
  
    try {
        const userList = await User.find({})
        if(!userList){
            res.status(404).send()
        }else{
            res.send(userList)
        }
    } catch (error) {
        res.status(500).send()
    }

})


router.get('/users/:uid',async (req,res)=>{
  
    try {
        const user = await User.findOne({uid:req.params.uid})
        if(!user){
            res.status(404).send()
        }else{
            res.send(user)
        }
    } catch (error) {
        res.status(500).send()
    }

})

router.patch('/users/:name',async(req,res)=>{
    try {
        const user = await User.findOneAndUpdate({name:req.params.name},{position:req.body.position})
        if(!user){
            res.status(404).send()
        }else{
            res.send(user)
        }
    } catch (error) {
        
    }
})
// router.patch('/users/me',auth,async (req,res)=>{
//       const updates = Object.keys(req.body)
//     try {
//         const updates = Object.keys(req.body)
//         // const user = await User.findById(req.user._id)
//         updates.forEach((update)=>{
//             req.user[update] = req.body[update]
//         })

//         await req.user.save()
//         //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
//         // if(!user){
//         //     return res.status(404).send()
//         // }
//         res.send(req.user)
//     } catch (error) {
//         res.status(500).send()
//     }
// })

router.delete('/users/:uid',async (req,res)=>{
    try {
        const user = await User.findOneAndDelete({uid:req.params.uid})
        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})



module.exports = router