const express = require('express');
const router = new express.Router();
const Ticket = require('../models/ticket');

router.post('/ticket',async(req,res)=>{
    let new_ticket = req.body
    console.log(new_ticket)
    const ticket = new Ticket(req.body)
    try {
        await ticket.save();
        res.send(ticket);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get('/project/ticket/:id',async(req,res)=>{
    try{
        const ticket = await Ticket.find({"project":req.params.id})
        res.send(ticket);
    }
    catch(error){
        res.status(500).send();
    }
})

router.get('/user/ticket/:id',async(req,res)=>{
    try{
        const ticket = await Ticket.find({"users._id":req.params.id})
        res.send(ticket);
    }
    catch(error){
        res.status(500).send();
    }
})


router.patch('/ticket/:id',async(req,res)=>{
    try {
        const ticket = await Ticket.findOneAndUpdate({_id:req.params.id},req.body)
        if(!ticket){
            res.status(404).send()
        }else{
            res.send(ticket)
        }
    } catch (error) {
        
    }
})

router.delete('/ticket/:id',async(req,res)=>{
    try {
        const ticket = await Ticket.findOneAndDelete({_id:req.params.id})
        res.send(ticket)
    } catch (error) {
        res.status(500).send()
    }
})





module.exports = router