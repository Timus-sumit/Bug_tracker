import React from 'react';
import 'reactstrap';
import {connect} from 'react-redux';
import { sortByPriority,setTicketFilter, sortByStatus } from '../actions/filter';

class TicketFilter extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ">
                        <h2 className="pageheader">Search By Name</h2>
                        <input type='text' className="text-input" value={this.props.filter.ticket} placeholder="Search Tickets" onChange={(e)=>{
                            this.props.dispatch(setTicketFilter(e.target.value))
                        }}/>
                    </div>
                    <div className="col-md-4 ">
                        <h2 className="pageheader">Search By Priority</h2>
                        <select className="select" value={this.props.filter.sortByPriority} onChange={(e)=>{
                            this.props.dispatch(sortByPriority(e.target.value))
                        }}> 
                            <option value="">N/A</option>
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                    <div className="col-md-4 ">
                        <h2 className="pageheader">Search By Status</h2>
                        <select className="select" value={this.props.filter.sortByStatus} onChange={(e)=>{
                            this.props.dispatch(sortByStatus(e.target.value))
                        }}>
                            <option value="">N/A</option>
                            <option value="New">New</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                            <option value="Needs More Info">Needs More Info</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        filter:state.filter
    }
}

export default connect(mapStateToProps)(TicketFilter)

