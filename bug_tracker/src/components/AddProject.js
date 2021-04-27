import React from 'react';
import {connect} from 'react-redux';
import ProjectForm from '../components/ProjectForm';
import {startAddProject} from '../actions/projects';

class AddProject extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className="container my-4">
                <h1>Create New Project</h1>
                <ProjectForm 
                list={this.props.list}
                onSubmit={(project)=>{
                    this.props.dispatch(startAddProject(project)).then(()=>{
                        this.props.history.push('/dashboard')
                        window.location.reload()
                    })
                    // this.props.history.push('/dashboard')
                }}
                />
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        list : state.users,
        user : state.auth
    }
}
export default connect(mapStateToProps)(AddProject);