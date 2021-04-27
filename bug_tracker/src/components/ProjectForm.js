import React from 'react';
import 'reactstrap';

class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
            admin:{name:'',_id:''},
            manager:{name:'',_id:''},
            submitter:{name:'',_id:''},
            developer:[],
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
    onAdminChange=(e)=>{
        const name = e.target.value;
        let _id='';
        this.props.list.forEach((user)=>{
            if(user.name===name){
                _id=user._id
            }
        })
        const admin={name,_id}
        this.setState(()=>{
            return{
                admin
            }
        })
    }
    onManagerChange=(e)=>{
        const name = e.target.value;
        let _id='';
        this.props.list.forEach((user)=>{
            if(user.name===name){
                _id=user._id
            }
        })
        const manager={name,_id}
        this.setState(()=>{
            return{
                manager
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
                developer:prevState.developer.concat(developer)
            }
        })
    }
    onSubmit=(e)=>{
         e.preventDefault();
        if(!this.state.title || !this.state.description || !this.state.admin || !this.state.manager){
            this.setState(()=>{
                return{
                    error:'Please fill all opitons !'
                }
            })
        }else{
            this.setState(()=>{
                return{
                    error:''
                }
            })
            let project = {};
            project.projectTitle = this.state.title;
            project.projectDescription = this.state.description;
            project.users = [{_id:this.state.admin._id},{_id:this.state.manager._id},{_id:this.state.submitter._id}];
            // project.users.push({_id:this.state.admin._id})
            // project.users.push({_id:this.state.manager._id})
            // project.users.push({_id:this.state.submitter._id})
            this.state.developer.forEach((dev)=>{
                project.users.push({_id:dev._id})
            })
            console.log(project)
            this.props.onSubmit(project)
            
        }
    }
    render(){
        return(
            <div className="container">
                
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Project Title" value={this.state.title} onChange={this.onTitleChange} autoFocus/>
                    </div>
                    <div className="input-group">
                        <textarea className="form-control" type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange}/>
                    </div>
                    <div >
                        <select className="select" value={this.state.admin.name} onChange={this.onAdminChange}>
                            <option value='' disabled selected hidden>Select an Admin</option>
                            {this.props.list.map((user)=>{
                                if(user.position === "admin"){
                                return <option  value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                    </div>
                    <div className="input-group" >
                        <select className="select" value={this.state.manager.name} onChange={this.onManagerChange}>
                            <option value="" disabled selected hidden>Select a Project Manager</option>
                            {this.props.list.map((user)=>{
                                if(user.position === "manager"){
                                return <option value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                    </div>
                    <div className="input-group">
                        <select className="select" value={this.state.submitter.name} onChange={this.onSubmitterChange}>
                            <option value="" disabled selected hidden>Select a Submitter</option>
                            {this.props.list.map((user)=>{
                                if(user.position === "submitter"){
                                return <option value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                    </div>
                    <div className="input-group" >
                        <select className="select-dev" multiple size="3" value={this.state.developer.name} onChange={this.onDeveloperChange}>
                            <option value="" disabled selected >Select a Developer</option>
                            {this.props.list.map((user)=>{
                                if(user.position === "developer"){
                                return <option value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                    </div>
                    <div className="input-group" >
                        <button className="btn btn-success">Create</button>
                    </div>
                </form>
                
                
            </div>
        )
    }
}

export default ProjectForm;