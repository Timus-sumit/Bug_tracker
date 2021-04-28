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
        tickets:state.tickets

    }
}

export default connect(mapStateToProps)(Home)