import React from 'react';
import 'reactstrap';

class TicketForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:props.ticket?props.ticket.title:'',
            description:props.ticket?props.ticket.description:'',
            submitter:props.ticket?props.list.find((user)=>{
                const u = props.ticket.users.find((u)=>{
                    return user._id===u._id
                })
                return u && user.position==='submitter'
            }):{name:'',_id:''},
            developer:props.ticket?props.list.find((user)=>{
                const u = props.ticket.users.find((u)=>{
                    return user._id===u._id
                })
                return u && user.position==='developer'
            }):{name:'',_id:''},
            project:{name:this.props.project.projectTitle,_id:this.props.project._id},
            priority:props.ticket?props.ticket.priority:'',
            status:props.ticket?props.ticket.status:'',
            error:''
        }
    }

    onTitleChange=(e)=>{
        const title = e.target.value;
        this.setState(()=>{
            return{
                title
            }
        })
    }
    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>{
            return{
                description
            }
        })
    }
    onSubmitterChange=(e)=>{
        const name = e.target.value;
        let _id='';
        this.props.list.forEach((user)=>{
            if(user.name===name){
                _id=user._id
            }
        })
        const submitter={name,_id}
        this.setState(()=>{
            return{
                submitter
            }
        })
    }
    onDeveloperChange=(e)=>{
        const name = e.target.value;
        let _id='';
        this.props.list.forEach((user)=>{
            if(user.name===name){
                _id=user._id
            }
        })
        const developer={name,_id}
        this.setState((prevState)=>{
            return{
                developer
            }
        })
    }
    onPriorityChange=(e)=>{
        const priority = e.target.value;
        this.setState(()=>{
            return{
                priority
            }
        })
    }

    onStatusChange=(e)=>{
        const status = e.target.value;
        this.setState(()=>{
            return{
                status
            }
        })
    }

    onSubmit=(e)=>{
         e.preventDefault();
         if(!this.state.title || !this.state.description || !this.state.submitter._id || !this.state.developer._id || !this.state.priority || !this.state.status){
             this.setState(()=>{
                 return{
                     error:'Please Fill all the opitons !'
                 }
             })
         }
         else{
             this.setState(()=>{
                 return{
                     error:''
                 }
             })

             let users = [{_id:this.state.submitter._id},{_id:this.state.developer._id}]
             this.props.project.users.forEach((u)=>{
                 const user = this.props.list.find((user)=>{
                     return user._id===u._id
                 })
                 if(user.position === 'admin' || user.position==='manager'){
                     users = users.concat({_id:user._id})
                 }
             })

             const ticket = {
                 title:this.state.title,
                 description:this.state.description,
                 users,
                 project:this.props.project._id,
                 priority:this.state.priority,
                 status:this.state.status
             }

             this.props.onSubmit(ticket)
         }

       
    }
    render(){
        return(
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <br/>
                    {this.state.error && <p>{this.state.error}</p>}
                    <h2>Title :</h2>
                    <div className="input-group">
                    <input disabled={(this.props.ticket && (this.props.user.position==='developer'||this.props.user.position==='submitter'))?true:false} className="form-control" type="text" placeholder=" Title" value={this.state.title} onChange={this.onTitleChange} autoFocus/>
                    </div>
                    <h2>Description :</h2>
                    <div className="input-group">
                    <textarea disabled={(this.props.ticket && (this.props.user.position==='developer'||this.props.user.position==='submitter'))?true:false} className="form-control" type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange}/>
                    </div>
                    <h2>Project Name :</h2>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder=" Project" value={this.state.project.name} disabled={true} />
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <h2>Submitter :</h2>
                            <div className="input-group">
                            <select disabled={(this.props.ticket && (this.props.user.position==='developer'||this.props.user.position==='submitter'))?true:false} className="select" value={this.state.submitter.name} onChange={this.onSubmitterChange}>
                                <option value="" disabled selected hidden>Select a Submitter</option>
                                {this.props.project.users.map((u)=>{
                                    const user = this.props.list.find((user)=>{
                                        return user._id===u._id
                                    })
                                    if(user.position === "submitter"){
                                    return <option value={user.name}>{user.name}</option>
                                    }
                                })}
                            </select>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h2>Developer :</h2>
                            <div className="input-group">
                            <select disabled={(this.props.ticket && (this.props.user.position==='developer'||this.props.user.position==='submitter'))?true:false} className="select" value={this.state.developer.name} onChange={this.onDeveloperChange}>
                                <option value="" disabled selected hidden >Select a Developer</option>
                                {this.props.project.users.map((u)=>{
                                    const user = this.props.list.find((user)=>{
                                        return user._id===u._id
                                    })
                                    if(user.position === "developer"){
                                    return <option value={user.name}>{user.name}</option>
                                    }
                                })}
                            </select>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h2>Priority Level :</h2>
                            <div className="input-group">
                            <select disabled={(this.props.ticket && (this.props.user.position==='developer'||this.props.user.position==='submitter'))?true:false} className="select" value={this.state.priority} onChange={this.onPriorityChange}>
                                <option value="" disabled selected hidden>Priority Level</option>
                                <option value="low">low</option>
                                <option value="medium">medium</option>
                                <option value="high">high</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h2>Ticket Status:</h2>
                            <div className="input-group">
                            <select className="select" value={this.state.status} onChange={this.onStatusChange}>
                                <option value="" disabled selected hidden>Ticket Status</option>
                                <option value="New">New</option>
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                                <option value="Needs More Info">Needs More Info</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="input-group">
                    <button  className="btn btn-success">{this.props.ticket?'Save':'Create'}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TicketForm;