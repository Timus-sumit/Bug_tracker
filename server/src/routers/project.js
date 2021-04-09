const express = require('express');
const router = new express.Router();
const Project = require('../models/project');

router.post('/project',async(req,res)=>{
    const project = new Project(req.body)

    try {
        await project.save();
        res.send(project);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get('/project',async(req,res)=>{
    try{
        const project = await Project.find({"users._id":req.body.user})
        res.send(project);
    }
    catch(error){
        res.status(500).send();
    }
})

router.delete('/project/:id',async(req,res)=>{
    try {
        const project = await Project.findOneAndDelete({_id:req.params.id})
        res.send(project)
    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router;