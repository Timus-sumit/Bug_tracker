import React from 'react';
import {connect} from 'react-redux';
import { createTicket } from '../actions/tickets';
import TicketForm from './TicketForm';

const EditTicket = (props)=>{
    return(
        <div>
            <h1>Edit Ticket</h1>
            <TicketForm list={props.list} project={props.project} ticket={props.ticket} onSubmit={(ticket)=>{
                props.dispatch(createTicket(ticket)).then(()=>{
                    props.history.push(`/details/${props.project._id}`)
                    window.location.reload()
                })
            }} />
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