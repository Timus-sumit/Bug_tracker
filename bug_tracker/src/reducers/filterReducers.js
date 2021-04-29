

const defaultFilterReducerState = {
    text:'',
    sortByPriority:'',
    sortByStatus:'',
    ticket:'',
   
}
const filterReducer = (state=defaultFilterReducerState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SET_TICKET_FILTER':
            return {
                ...state,
                ticket:action.ticket
            };
        case 'SORT_BY_PRIORITY':
            return{
                ...state,
                sortByPriority:action.priority
            };
        case 'SORT_BY_STATUS':
            return{
                ...state,
                sortByStatus:action.status
            };
        default :
            return state;
    }
}

export default filterReducer;