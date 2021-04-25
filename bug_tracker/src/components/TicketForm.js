import React from 'react';


class TicketForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
            submitter:{name:'',_id:''},
            developer:{name:'',_id:''},
            project:{name:this.props.project.projectTitle,_id:this.props.project._id},
            priority:'',
            status:'',
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
         if(!this.state.title && !this.state.description && !this.state.submitter._id && !this.state.developer._id && !this.state.priority && !this.state.status){
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

             console.log(ticket)
         }

       
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" placeholder=" Title" value={this.state.title} onChange={this.onTitleChange} autoFocus/>
                    <textarea type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange}/>
                    <select value={this.state.submitter.name} onChange={this.onSubmitterChange}>
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
                    <select value={this.state.developer.name} onChange={this.onDeveloperChange}>
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
                    <input type="text" placeholder=" Project" value={this.state.project.name} disabled />
                    <select value={this.state.priority} onChange={this.onPriorityChange}>
                        <option value="" disabled selected hidden>Priority Level</option>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                    <select value={this.state.status} onChange={this.onStatusChange}>
                        <option value="" disabled selected hidden>Ticket Status</option>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Close">Close</option>
                    </select>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default TicketForm;