import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {Card} from 'reactstrap';

const Dashboard = (props)=>{
    return (
        <div>
            <br/>
            <br/>
            <div className="container">
                {props.user.position==='admin' && 
                <NavLink to='/addProject' className="btn btn-primary stretched-link">
                    Create New Project
                </NavLink>
                }
                <br/>
                <br/>
                <Card>
                    <h1 className="card-header">Your Projects</h1>
                {props.projects.map((project)=>{
                    return(
                        <div>
                            <div className="list-item">
                                <div>
                                    <h3 className="list-item__title">{project.projectTitle}</h3>
                                    <span className="list-item__subtitle">{project.projectDescription}</span>            
                                </div>
                                <div>
                                    <NavLink to={`/details/${project._id}`}>Details</NavLink>
                                    <br/>
                                    <NavLink to={`/manageusers/${project._id}`}>Manage Users</NavLink>
                                    <br/>
                                </div>
                            </div> 
                        </div>
                    )
                })}
                </Card>
                <hr/>
                <br/>
                <br/>
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
