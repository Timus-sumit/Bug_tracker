const axios = require('axios');

export const startSetUsers = ()=>{
    return (dispatch)=>{

        return axios.get(`http://localhost:8080/users`).then((response)=>{
            const list =[];
            response.data.forEach((user)=>{
                list.push(user)
            })
            // console.log(response.data[0])
            dispatch({type:'USERS',list})
        })
    }
}

export const setRole = ({name,position})=>{
    return(dispatch)=>{

     return axios.patch(`http://localhost:8080/users/${name}`,{position})

    }

}