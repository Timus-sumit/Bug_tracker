import React from 'react';
import {connect} from 'react-redux';
import { addUser } from '../actions/projects';
import User from './User';
import 'reactstrap';

class ManageUsers extends React.Component {
    constructor(props){
        super(props)
        this.state={
            admin:{name:'',_id:''},
            manager:{name:'',_id:''},
            submitter:{name:'',_id:''},
            developer:{name:'',_id:''},
            error:''
        }
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
                developer
            }
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.admin._id && !this.state.developer._id && !this.state.submitter._id && !this.state.manager._id){
            this.setState(()=>{
                return{
                    error:"Please fill at least one Role in order to add New Users!"
                }
            })
        }else{
            this.setState(()=>{
                return{
                    error:''
                }
            })

            var new_users = {users:[]}
            if(this.state.admin._id){
                new_users.users = new_users.users.concat({_id:this.state.admin._id})
            }
            if(this.state.manager._id){
                new_users.users = new_users.users.concat({_id:this.state.manager._id})
            }
            if(this.state.developer._id){
                new_users.users = new_users.users.concat({_id:this.state.developer._id})
            }
            if(this.state.submitter._id){
                new_users.users = new_users.users.concat({_id:this.state.submitter._id})
            }

            // console.log(new_users)
            this.props.dispatch(addUser(this.props.project._id,new_users)).then(()=>{
                window.location.reload()
            })
        }
    }

    render(){
        return(
            <div className="container">
                <h1 className="my-4">Project Title:</h1>
                <h2>{this.props.project.projectTitle}</h2>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-lg-6 scroll">
                    <div className="card table-container">
                    <div className="list-header">
                                <div>
                                    <h2 className="list-item__title">User</h2>
                                </div>
                            </div>
                            {this.props.project.users.map((user)=>{
                                return <User _id={user._id} projectId={this.props.project._id} edit={true} />
                            })}
                    
                    </div>
                    </div>

                    <div className="col-lg-6 ">
                    <div className="input-form">
                    <form onSubmit={this.onSubmit}>
                        <h1>Add Users</h1>
                        {this.state.error && <p>{this.state.error}</p>}
                        <div className="input-form__form">
                        <select className="select" value={this.state.admin.name} onChange={this.onAdminChange}>
                            <option value='' disabled selected hidden>Add an Admin</option>
                            {this.props.list.map((user)=>{
                                if(user.position === "admin"){
                                    return <option value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                        </div>
                        <div className="input-form__form">
                        <select className="select" value={this.state.manager.name} onChange={this.onManagerChange}>
                            <option value="" disabled selected hidden>Add a Project Manager</option>
                            {this.props.list.map((user)=>{
                                if(user.position === "manager"){
                                    return <option value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                        </div>
                        <div className="input-form__form">
                        <select className="select" value={this.state.submitter.name} onChange={this.onSubmitterChange}>
                            <option value="" disabled selected hidden>Add a Submitter</option>
                            {this.props.list.map((user)=>{
                                if(user.position === "submitter"){
                                    return <option value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                        </div>
                        <div className="input-form__form">
                        <select className="select" value={this.state.developer.name} onChange={this.onDeveloperChange}>
                            <option value="" disabled selected hidden>Add a Developer</option>
                            {this.props.list.map((user)=>{
                                if(user.position === "developer"){
                                    return <option value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                        </div>
                        <div className="input-form__form">
                            <button className="btn btn-success">Add</button>
                        </div>
                        
                    </form>
                    </div>
                    </div>
                </div>
                
                
                


            </div>
        )
    }
}

const mapStateToProps = (state,props)=>{
    return{
        project: state.projects.find((project)=>{
            return project._id===props.match.params.id;
        }),
        list : state.users
    }
}

export default connect(mapStateToProps)(ManageUsers)