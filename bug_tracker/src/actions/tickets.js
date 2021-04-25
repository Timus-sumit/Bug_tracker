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