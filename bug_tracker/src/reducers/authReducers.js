const authReducer = (state={},action)=>{
    switch (action.type){
        case 'LOGIN':
            return{ uid:action.uid, name:action.name, position:action.position, email:action.email,_id:action._id};
        case 'LOGOUT':
            return {};
        default :
            return state;
        }   
}

export default authReducer;