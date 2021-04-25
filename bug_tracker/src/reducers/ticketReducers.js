const ticketReducer = (state=[],action)=>{
    switch(action.type){
        case 'SET_TICKET':
            return action.list;
        default :
            return state;
    }
}

export default ticketReducer;