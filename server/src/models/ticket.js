const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
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
    ],
    project:{
             type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Project'
           
    },
    priority:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
})



const Ticket= mongoose.model('Ticket',ticketSchema)

module.exports = Ticket