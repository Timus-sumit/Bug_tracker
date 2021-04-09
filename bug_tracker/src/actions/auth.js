import { connect } from 'react-redux';
import {firebase} from '../firebase/firebase';
const axios = require('axios');

export const login = ({uid,email,name,position})=>{
    return{
        type:'LOGIN',
        uid,
        email,
        name,
        position
    }
}

export const readUser = (uid)=>{
    return(dispatch)=>{

     return axios.get(`http://localhost:8080/users/${uid}`).then((response)=>{
            const {name,uid,email,position,_id}=response.data

            dispatch({type:'LOGIN',name,uid,email,position,_id})
        })

    }

  
}

export const startSignup = ({name,email,password,position})=>{
    return ()=>{
        return firebase.auth().createUserWithEmailAndPassword(email,password).then((cred)=>{
                axios.post('http://localhost:8080/users',{name,email,position,uid:cred.uid})
                
         })
    }
}

export const startLogin = ({email,password})=>{
    return ()=>{
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }
}

export const logout = ()=>{
    return{
        type:'LOGOUT'
    }
}

export const startLogout = ()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}

