import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { setProjectTickets } from '../actions/tickets';
import TicketFilter from './TicketFilter';
import User from './User';
import getVisibleData from '../selectors/ticket';

class Details extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.dispatch(setProjectTickets(this.props.project))
    }

    render(){
    return(
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-lg-6">
                    <h1>Project Title:</h1>
                    <h2 className="pageheader-bold">{this.props.project.projectTitle}</h2>
                    <br/>

                    {(this.props.user.position==='admin' || this.props.user.position==='manager')&& <NavLink className="btn btn-primary stretched-link" to={`/editProject/${this.props.project._id}`}>Edit</NavLink>}
                </div>
                <div className="col-lg-6">
                    <h1> Description:</h1>
                    <h3 className="pageheader-bold">{this.props.project.projectDescription}</h3>
                </div>
            </div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-lg-3">
                     <NavLink className="btn btn-primary stretched-link" to={`/createTicket/${this.props.project._id}`}>Create Ticket</NavLink>
                </div>
                <div className="col-lg-9">
                    <TicketFilter/>
                </div>
            </div>
            
            <br/><br/>
            <div className="row">
                <div className="col-lg-6 scroll">
                    <div className="card table-container">
                    <div className="list-header">
                                <div>
                                    <h2 className="list-item__title">Assigned Users</h2>
                                </div>
                            </div>
                            {this.props.project.users.map((user)=>{
                                return <User _id={user._id} projectId={this.props.project._id} edit={false} />
                            })}
                    
                    </div>            
                </div>
                <div className="col-lg-6 scroll">
                <div className="card">
                <div className="list-header">
                    <div>
                        <h2 className="list-item__title">Tickets</h2>
                    </div>
                </div>
                    {this.props.tickets.map((ticket)=>{
                        return(
                            <div>
                            <NavLink className="list-item" to={`/editTicket/${ticket.project}/${ticket._id}`}>
                                <div>
                                    <h3 className="list-item__title">{ticket.title}</h3>
                                    <span className="list-item__subtitle">{ticket.description}</span>            
                                </div>
                                <div >
                                    <h3 className="list-item__title">Status: {ticket.status}</h3>
                                    <span className="list-item__subtitle">Priority: {ticket.priority}</span>
                                </div>
                            </NavLink> 
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
            <hr/>
            <br/>
            
            <br/>
            <br/>
            

        </div>
    )
        }
}

const mapStateToProps = (state,props)=>{
    return{
        project: state.projects.find((project)=>{
            return project._id===props.match.params.id;
        }),
        tickets: getVisibleData(state.tickets,state.filter),
        user: state.auth
    }
}

export default connect(mapStateToProps)(Details)