import React from 'react';
import { connect } from 'react-redux';
import {startLogout} from '../actions/auth';
import {Card} from 'reactstrap';

const Header = (props)=>{

    return(
        <Card>
                <diV className="row align-items-center py-1">
                    <div className="col ml-4 my-1">
                        <h1>Hello {props.user.name} !</h1>
                        <p>Logged in as: <h4>{props.user.position.toUpperCase()}</h4></p>
                    </div>
                    <div className="col item-left mr-4">
                        <button className="button button--link" onClick={props.startLogout}>Logout</button>
                    </div>
                </diV>
            </Card>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogout : ()=>dispatch(startLogout())
    }
}
const mapStateToProps = (state)=>{
    return{
        user:state.auth,
        projects:state.projects
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
