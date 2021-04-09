const projectReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state,action.project];
        case 'SET_PROJECT':
            return action.list;
        default :
            return state;
    }
}

export default projectReducer;