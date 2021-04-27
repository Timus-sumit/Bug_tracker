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
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-lg-6">
                    <h1>Title:</h1>
                    <h2>{this.props.project.projectTitle}</h2>
                    <br/>
                    <h1> Description:</h1>
                    <h2>{this.props.project.projectDescription}</h2>
                    <br/>
                    <NavLink className="btn btn-primary stretched-link" to={`/editProject/${this.props.project._id}`}>Edit</NavLink>
                </div>
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
            </div>
            <hr/>
            <br/>
            <NavLink className="btn btn-primary stretched-link" to={`/createTicket/${this.props.project._id}`}>Create Ticket</NavLink>
            <br/><br/>
            <div className="card">
                <h1 className="card-header">Tickets</h1>
                {this.props.tickets.map((ticket)=>{
                    return(
                        <div>
                        <div className="list-item">
                            <div>
                                <h3 className="list-item__title">{ticket.title}</h3>
                                <span className="list-item__subtitle">{ticket.description}</span>            
                            </div>
                            <div>
                                <NavLink to={`/editTicket/${this.props.project._id}/${ticket._id}`}>Edit</NavLink>
                            </div>
                        </div> 
                        </div>
                    )
                })}
            </div>
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
        tickets: state.tickets
    }
}

export default connect(mapStateToProps)(Details)