import React from 'react';
import 'reactstrap';
import {connect} from 'react-redux';
import { setUserTickets } from '../actions/tickets';
import {NavLink} from 'react-router-dom';


class UserTickets extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(setUserTickets(this.props.user._id))
    }

    render(){

    return(
        <div className="container">
            <br/>
            <div className="card my-5">
                <h1 className="card-header">Your Tickets</h1>
                
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
            <br/>
            <br/>
            <hr/>
        </div>
    )
    }
}

const mapStateToProps = (state)=>{
    return{
        user : state.auth,
        tickets:state.tickets

    }
}

export default connect(mapStateToProps)(UserTickets)