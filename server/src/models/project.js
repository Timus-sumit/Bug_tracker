const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectTitle:{
        type:String,
        required:true
    },
    projectDescription:{
        type:String,
        required: true,
        trim:true

    },
    users:[
        {
           _id:{ type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
           }
        }
    ]
    
})


const Project= mongoose.model('Project',projectSchema)

module.exports = Project