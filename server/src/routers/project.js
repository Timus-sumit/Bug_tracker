const express = require('express');
const router = new express.Router();
const Project = require('../models/project');

router.post('/project',async(req,res)=>{
    let new_project = {projectTitle:req.body.projectTitle,projectDescription:req.body.projectDescription,users:req.body.users}
    console.log(new_project)
    const project = new Project(new_project)
    try {
        await project.save();
        res.send(project);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get('/project/:id',async(req,res)=>{
    try{
        const project = await Project.find({"users._id":req.params.id})
        res.send(project);
    }
    catch(error){
        res.status(500).send();
    }
})

router.patch('/project/:id',async(req,res)=>{
    try {
        const project = await Project.findOneAndUpdate({_id:req.params.id},{projectTitle:req.body.projectTitle,projectDescription:req.body.projectDescription})
        if(!project){
            res.status(404).send()
        }else{
            res.send(project)
        }
    } catch (error) {
        
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