import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';

const Dashboard = (props)=>{
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Hello {props.user.name}</p>
            <h3>Logged in as {props.user.position}</h3>
            <button onClick={props.startLogout}>Logout</button>
            <br/>
            <br/>
            <div>
                {props.user.position==='admin' && 
                <NavLink to='/addProject'>
                <h3 className=" yt-style" >Create New Project</h3>
                </NavLink>
                }
                <br/>
                <br/>
                {props.projects.map((project)=>{
                    return(
                        <div>
                            <h2>Title</h2>
                            <p>{project.projectTitle}</p>
                            <h3>Description</h3>
                            <p>{project.projectDescription}</p>
                            <NavLink to={`/editProject/${project._id}`}>Edit</NavLink>
                            <br/>
                            <NavLink to={`/manageusers/${project._id}`}>Manage Users</NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        startLogout : ()=>dispatch(startLogout())
    }
}
const mapStateToProps = (state)=>{
    return{
        user:state.auth,
        projects:state.projects
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
