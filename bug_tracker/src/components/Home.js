import React from 'react';
import{connect} from 'react-redux';
import 'reactstrap';
import {setUserTickets} from '../actions/tickets';
import Graph from '../components/graph';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container">
                <br/>
                <div className="row my-5">
                    <div className="col-xl-6">
                        <h1 className="pageheader">You are currently part of <span>{this.props.projects.length}</span> {this.props.projects.length===1?'project':'projects'}.</h1>
                    </div>
                    <div className="col-xl-6">
                        <h1 className="pageheader">Number of Tickets assigned to you:- <span>{this.props.tickets.length}</span></h1>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-xl-6 my-4">
                        <Graph data='priority' axis={{x:'Priority',y:'Tickets'}} caption={"Tickets Priority"} />
                    </div>
                    <div className="col-xl-6 my-4">
                        <Graph data='status' axis={{x:'Status',y:'Tickets'}} caption={"Tickets Status"} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user : state.auth,
        tickets:state.tickets,
        projects:state.projects

    }
}

export default connect(mapStateToProps)(Home)