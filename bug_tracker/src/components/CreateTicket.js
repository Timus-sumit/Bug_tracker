import React from 'react';
import {connect} from 'react-redux';
import { createTicket } from '../actions/tickets';
import TicketForm from './TicketForm';
import 'reactstrap';

const CreateTicket = (props)=>{
    return(
        <div className="container">
            <br/>
            <h1>Create Ticket</h1>
            <TicketForm list={props.list} project={props.project} onSubmit={(ticket)=>{
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
        list : state.users
    }
}

export default connect(mapStateToProps)(CreateTicket);