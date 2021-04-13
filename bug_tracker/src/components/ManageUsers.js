import React from 'react';
import {connect} from 'react-redux';

class ManageUsers extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>Project Title:</h2>
                <p>{this.props.project.projectTitle}</p>
            </div>
        )
    }
}

const mapStateToProps = (state,props)=>{
    return{
        project: state.projects.find((project)=>{
            return project._id===props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(ManageUsers)