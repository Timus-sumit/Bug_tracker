const usersReducer = (state=[],action)=>{
    switch(action.type){
        case 'USERS':
            return action.list;
        default :
            return state;
    }
}

export default usersReducer;