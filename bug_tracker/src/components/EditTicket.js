import React from 'react';
import {connect} from 'react-redux';
import { deleteTicket, updateTicket } from '../actions/tickets';
import TicketForm from './TicketForm';
import 'reactstrap';

const EditTicket = (props)=>{
    return(
        <div className="container">
            <h1>Edit Ticket</h1>
            <TicketForm list={props.list} project={props.project} ticket={props.ticket} onSubmit={(body)=>{
                props.dispatch(updateTicket(body,props.ticket._id)).then(()=>{
                    props.history.push(`/details/${props.project._id}`)
                    window.location.reload()
                })
            }} />
            <button className="btn btn-danger my-3 " onClick={()=>{
                props.dispatch(deleteTicket(props.ticket._id)).then(()=>{
                    props.history.push(`/details/${props.project._id}`)
                    window.location.reload()
                })
                // this.props.history.push('/dashboard')
                // window.location.reload()
            }}>
                Delete Ticket
            </button>
            <br/>
            <br/>
        </div>
    )
}

const mapStateToProps = (state,props)=>{
    return{
        project: state.projects.find((project)=>{
            return project._id===props.match.params.id;
        }),
        ticket : state.tickets.find((ticket)=>{
            return ticket._id===props.match.params.ticketId;
        }),
        list : state.users
    }
}

export default connect(mapStateToProps)(EditTicket);