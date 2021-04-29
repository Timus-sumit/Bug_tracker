//get_visible_data


const getVisibleData = (tickets,{ticket,sortByPriority,sortByStatus})=>{
    return tickets.filter((t)=>{
        const priority = sortByPriority ? sortByPriority===t.priority:true
        const status = sortByStatus ? sortByStatus===t.status:true;
        const textMatch = t.title.toLowerCase().includes(ticket.toLowerCase());

        return (textMatch && priority && status);
    })
}

export default getVisibleData;