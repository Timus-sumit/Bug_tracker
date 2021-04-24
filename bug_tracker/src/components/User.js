import React from 'react';
import {connect} from 'react-redux';

const User = (props)=>{
    var current_user = {}
    props.list.forEach((user)=>{
        if(user._id===props._id){
            current_user = user
        }
    })
    return (
            <div> 
                {current_user.name+"    "}
                {current_user.email+"   "}
                {current_user.position+"    "}
            </div>
    )
}


const mapStateToProps = (state,props)=>{
    return{
        list : state.users
    }
}

export default connect(mapStateToProps)(User)