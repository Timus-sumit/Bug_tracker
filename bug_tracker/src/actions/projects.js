const axios = require('axios');

export const startAddProject = (project={})=>{
    return (dispatch)=>{
        return axios.post('https://track-bugs.herokuapp.com/project',project).then(()=>{
            dispatch({
                type:'ADD_PROJECT',
                project
            })
        }).catch(error=>{
            console.log(error.response)
        })
    }
}

export const startSetProjects = (user)=>{
    return (dispatch)=>{

        return axios.get(`https://track-bugs.herokuapp.com/project/${user._id}`).then((response)=>{
            const list =[];
            response.data.forEach((project)=>{
                list.push(project)
            }) 
            //console.log(response.data[0])
            
            dispatch({type:'SET_PROJECT',list})
        })
    }
}

export const editProject = (project)=>{
    return (dispatch)=>{
        return axios.patch(`https://track-bugs.herokuapp.com/project/${project._id}`,project).then(()=>{
            console.log(project)
        })
        
    }
}

export const removeProject = (project)=>{
    return (dispatch)=>{
        return axios.delete(`https://track-bugs.herokuapp.com/project/${project._id}`)
    }
}

export const removeUser = (projectId,userId)=>{
    return (dispatch=>{
        return axios.delete(`https://track-bugs.herokuapp.com/project/user/${projectId}/${userId}`)
    })
}

export const addUser = (projectId,users)=>{
    return (dispatch)=>{
        // console.log(projectId,users)
        return axios.patch(`https://track-bugs.herokuapp.com/project/user/${projectId}`,users).then(()=>{
            
        }).catch(error=>{
            console.log(error)
        })
    }
}
