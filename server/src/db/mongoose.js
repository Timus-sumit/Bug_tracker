const mongoose = require('mongoose');
const User = require('../models/users')

mongoose.connect('mongodb://127.0.0.1:27017/bug-tracker',{
    useNewUrlParser:true,
    useCreateIndex:true
})

// const me = new User({
//     name:'Sumit',
//     email:'ss2637944@gmail.com'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })