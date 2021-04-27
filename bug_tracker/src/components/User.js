import React from 'react';
import {connect} from 'react-redux';
import { removeUser } from '../actions/projects';
import 'reactstrap';

const User = (props)=>{
    var current_user = {}
    props.list.forEach((user)=>{
        if(user._id===props._id){
            current_user = user
        }
    })
    return (
            <div className="list-item">
            <div>
                <h3 className="list-item__title">{current_user.name}</h3>
                <span className="list-item__subtitle">{current_user.email}</span>            
            </div>
            <div>
                <h3 className="list-item__title">{current_user.position.toUpperCase()}</h3>
                <span className="list-item__subtitle">{props.edit && <button className="btn btn-danger" onClick={()=>{
                    // console.log(props.projectId,current_user._id)
                    props.dispatch(removeUser(props.projectId,current_user._id)).then(()=>{
                        window.location.reload()
                    })
                }
                }>Remove</button>}</span>
            </div> 
            </div>
    )
}


const mapStateToProps = (state,props)=>{
    return{
        list : state.users
    }
}

export default connect(mapStateToProps)(User)