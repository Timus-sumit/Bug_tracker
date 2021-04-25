import React from 'react';
import {connect} from 'react-redux';
import TicketForm from './TicketForm';

const CreateTicket = (props)=>{
    return(
        <div>
            <h1>Create Ticket</h1>
            <TicketForm list={props.list} project={props.project} />
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