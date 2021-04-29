

export const setTextFilter = (text)=>{
    return {
        type : 'SET_TEXT_FILTER',
        text
    }
}


export const setTicketFilter = (ticket)=>{
    return {
        type : 'SET_TICKET_FILTER',
        ticket
    }
}


export const sortByPriority = (priority)=>{
    return {
        type :'SORT_BY_PRIORITY',
        priority
    }
}


export const sortByStatus=(status)=>{
    return {
        type:'SORT_BY_STATUS',
        status
    }
}
