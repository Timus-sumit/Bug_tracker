import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import User from './User';
const Details = (props)=>{

    return(
        <div>
            <h1>Title</h1>
            <p>{props.project.projectTitle}</p>
            <h1> Description</h1>
            <p>{props.project.projectDescription}</p>
            <NavLink to={`/editProject/${props.project._id}`}>Edit</NavLink>
            <hr/>
            <h1>Assigned Users</h1>
            {props.project.users.map((user)=>{
                return <User _id={user._id} projectId={props.project._id} edit={false} />
            })}
            <hr/>
            <h1>Tickets</h1>
            <NavLink to={`/createTicket/${props.project._id}`}>Create Ticket</NavLink>

        </div>
    )
}

const mapStateToProps = (state,props)=>{
    return{
        project: state.projects.find((project)=>{
            return project._id===props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(Details)