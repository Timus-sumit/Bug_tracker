import React from 'react';
import {connect} from 'react-redux';
import { setRole } from '../actions/users';

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
            <div>
                <h2>Manage User Roles</h2>
                {this.props.list.map((user)=>{
                   return <div> 
                   {user.name+"    "}
                   {user.email+"   "}
                   {user.position+"    "}
                   </div>
                })}
                <form onSubmit={this.onSubmit}>
                    <select value={this.state.name} onfocus='this.size=5;' onChange={this.onNameChange}>
                        <option value="" disabled selected hidden>Select a User</option>
                        {this.props.list.map((user)=>{
                            if(user.name != this.props.user.name){
                            return <option value={user.name}>{user.name}</option>
                            }
                        })}
                    </select>
                    <select value={this.state.position} onChange={this.onPositionChange}>
                        <option value="" disabled selected hidden>Select a Role</option>
                        <option value='admin'>Admin</option>
                        <option value='developer'>Developer</option>
                        <option value='manager'>Project Manager</option>
                        <option value='submitter'>Submitter</option>
                    </select>
                    <button>Submit</button>

                </form>
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