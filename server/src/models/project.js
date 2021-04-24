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

projectSchema.statics.findUserAndDelete=async(projectId,userId)=>{
    var project = await Project.findById(projectId);
    if(!project){
        throw new Error('unable to find project')
    }

    project.users=project.users.filter((user)=>{
        return user._id!=userId
    })
   
    console.log(userId)
    await project.save()
    return project

}


const Project= mongoose.model('Project',projectSchema)

module.exports = Project