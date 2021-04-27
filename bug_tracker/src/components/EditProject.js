import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { editProject, removeProject } from '../actions/projects';
import 'reactstrap';

class EditProject extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:this.props.project.projectTitle,
            description:this.props.project.projectDescription,
            error:''
        }
    }

    onTitleChange=(e)=>{
        const title = e.target.value;
        this.setState(()=>{
            return{
                title
            }
        })
    }
    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>{
            return{
                description
            }
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.title || !this.state.description){
            this.setState(()=>{
                return{
                    error:'Please fill all opitons !'
                }
            })
        }else{
            this.setState(()=>{
                return{
                    error:''
                }
            })
            const changes = {
                _id:this.props.project._id,
                projectTitle:this.state.title,
                projectDescription:this.state.description
            }
            this.props.dispatch(editProject(changes)).then(()=>{
                window.location.reload()
            })
            // this.props.history.push('/dashboard')
            // window.location.reload()
            
        }

    }    

    render(){
        return(
            <div className="container">
                <h1>Edit Project</h1>
                <br/>
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <h2>Title :</h2>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Project Title" value={this.state.title} onChange={this.onTitleChange} autoFocus/>
                    </div>
                    <h2>Description :</h2>
                    <div className="input-group">
                        <textarea className="form-control" type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange}/>
                    </div>
                    <div className="input-group">
                        <button className="btn btn-success">Save Edits</button>
                    </div>
                </form>
                <hr/>
                <br/>
                <button className="btn btn-danger" onClick={()=>{
                    this.props.dispatch(removeProject(this.props.project)).then(()=>{
                        this.props.history.push('/dashboard')
                        window.location.reload()
                    })
                    // this.props.history.push('/dashboard')
                    // window.location.reload()
                }}>
                    Delete Project
                </button>
                <NavLink className="btn btn-primary" to={`/manageusers/${this.props.project._id}`}>Manage Users</NavLink>
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

export default connect(mapStateToProps)(EditProject)
