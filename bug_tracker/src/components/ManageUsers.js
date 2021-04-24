import React from 'react';
import {connect} from 'react-redux';
import User from './User';

class ManageUsers extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>Project Title:</h2>
                <p>{this.props.project.projectTitle}</p>
                <br/>
                <br/>
                {this.props.project.users.map((user)=>{
                    return <User _id={user._id} projectId={this.props.project._id} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state,props)=>{
    return{
        project: state.projects.find((project)=>{
            return project._id===props.match.params.id;
        }),
        list : state.users
    }
}

export default connect(mapStateToProps)(ManageUsers)