import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { setProjectTickets } from '../actions/tickets';
import User from './User';
class Details extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.dispatch(setProjectTickets(this.props.project))
    }

    render(){
    return(
        <div>
            <h1>Title</h1>
            <p>{this.props.project.projectTitle}</p>
            <h1> Description</h1>
            <p>{this.props.project.projectDescription}</p>
            <NavLink to={`/editProject/${this.props.project._id}`}>Edit</NavLink>
            <hr/>
            <h1>Assigned Users</h1>
            {this.props.project.users.map((user)=>{
                return <User _id={user._id} projectId={this.props.project._id} edit={false} />
            })}
            <hr/>
            <h1>Tickets</h1>
            <NavLink to={`/createTicket/${this.props.project._id}`}>Create Ticket</NavLink>
            <br/><br/>
            {this.props.tickets.map((ticket)=>{
                return(
                    <div>
                        <h2>Title</h2>
                        <p>{ticket.title}</p>
                        <h3>Description</h3>
                        <p>{ticket.description}</p>
                        <NavLink to={`/editTicket/${this.props.project._id}/${ticket._id}`}>Edit</NavLink>
                        <hr/>
                    </div>
                )
            })}

        </div>
    )
        }
}

const mapStateToProps = (state,props)=>{
    return{
        project: state.projects.find((project)=>{
            return project._id===props.match.params.id;
        }),
        tickets: state.tickets
    }
}

export default connect(mapStateToProps)(Details)