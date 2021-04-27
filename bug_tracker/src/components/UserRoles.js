import React from 'react';
import {connect} from 'react-redux';
import { setRole } from '../actions/users';
import 'reactstrap';

class UserRoles extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            position:'',
            error:''
        }
    }
    onNameChange =(e)=>{
        const name = e.target.value;
        this.setState(()=>{
            return{
                name
            }
        })
    }

    onPositionChange=(e)=>{
        const position = e.target.value;
        this.setState(()=>{
            return{
                position
            }
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.name || !this.state.position){
            this.setState(()=>{
                return{
                    error:'Please Select Both Options!'
                }
            })
        }
        else{
            this.setState(()=>{
                return{
                    error:''
                }
            })
            const role={
                name:this.state.name,
                position:this.state.position
            }
            console.log(role)
            this.props.dispatch(setRole(role))
            window.location.reload();
        }
    }
    render(){
        return(
            <div className="container">
                <h1 className="my-4">Manage User Roles</h1>
                <div className="row"> 
                    <div className="col-lg-6 scroll">
                    <div className="card table-container">
                    <div className="list-header">
                                <div>
                                    <h2 className="list-item__title">User</h2>
                                </div>
                                <div>
                                    <h2>Role</h2>
                                </div>
                            </div>
                            {this.props.list.map((user)=>{
                                return (
                                    <div className="list-item">
                                    <div>
                                        <h3 className="list-item__title">{user.name}</h3>
                                        <span className="list-item__subtitle">{user.email}</span>            
                                    </div>
                                    <div>
                                        <h3 className="list-item__title">{user.position.toUpperCase()}</h3>
                                    </div>
                                    </div> 
                                )
                            })}
                    
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="input-form">
                    <form onSubmit={this.onSubmit}>
                        <div className="input-form__form">
                        <select className="select" value={this.state.name} onfocus='this.size=5;' onChange={this.onNameChange}>
                            <option value="" disabled selected hidden>Select a User</option>
                            {this.props.list.map((user)=>{
                                if(user.name != this.props.user.name){
                                return <option value={user.name}>{user.name}</option>
                                }
                            })}
                        </select>
                        </div>
                        <div className="input-form__form">
                        <select className="select" value={this.state.position} onChange={this.onPositionChange}>
                            <option value="" disabled selected hidden>Select a Role</option>
                            <option value='admin'>Admin</option>
                            <option value='developer'>Developer</option>
                            <option value='manager'>Project Manager</option>
                            <option value='submitter'>Submitter</option>
                        </select>
                        </div>
                        <div className="input-form__form">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        list : state.users,
        user : state.auth
    }
}
export default connect(mapStateToProps)(UserRoles);