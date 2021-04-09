const axios = require('axios');

export const startAddProject = (project={})=>{
    return (dispatch)=>{
        axios.post('http://localhost:8080/project',project).then(()=>{
            dispatch({
                type:'ADD_PROJECT',
                project
            })
        })
    }
}