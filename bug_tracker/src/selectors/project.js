const getVisibleData = (projects,{text})=>{
    return projects.filter((project)=>{
        const textMatch = project.projectTitle.toLowerCase().includes(text.toLowerCase());
        return (textMatch);
    })
}

export default getVisibleData;