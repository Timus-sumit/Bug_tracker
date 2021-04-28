const axios = require('axios');

export const createTicket = (ticket={})=>{
    return (dispatch)=>{
        return axios.post('http://localhost:8080/ticket',ticket).then(()=>{
        //    console.log(ticket)
        }).catch(error=>{
            console.log(error.response)
        })
    }
}


export const setProjectTickets = (project)=>{
    return (dispatch)=>{

        return axios.get(`http://localhost:8080/project/ticket/${project._id}`).then((response)=>{
            const list =[];
            response.data.forEach((project)=>{
                list.push(project)
            }) 
            //console.log(response.data[0])
            
            dispatch({type:'SET_TICKET',list})
            // console.log(response.data)
        })
    }
}

export const setUserTickets = (id)=>{
    return (dispatch)=>{

        return axios.get(`http://localhost:8080/user/ticket/${id}`).then((response)=>{
            const list =[];
            response.data.forEach((ticket)=>{
                list.push(ticket)
            }) 
            //console.log(response.data[0])
            
            dispatch({type:'SET_TICKET',list})
            // console.log(response.data)
        })
    }
}

export const updateTicket = (ticket={},id)=>{
    return (dispatch)=>{
            return axios.patch(`http://localhost:8080/ticket/${id}`,ticket).then(()=>{
            console.group('success')
        }).catch(error=>{
            console.log(error)
        })
    }
   
}

export const deleteTicket = (id)=>{
    return (dispatch)=>{
        return axios.delete(`http://localhost:8080/ticket/${id}`).then(()=>{
            console.group('success')
        }).catch(error=>{
            console.log(error)
        })
    }
}