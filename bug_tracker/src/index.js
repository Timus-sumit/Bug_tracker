import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Approute,{history} from './routes/Approute';
import configureStore from './store/store'
import {firebase} from'./firebase/firebase';
import './assets/plugins/nucleo/css/nucleo.css';
import "./assets/scss/argon-dashboard-react.scss";
import './styles/styles.scss';
import {Provider} from 'react-redux';
import {readUser} from './actions/auth';
import {startSetUsers} from './actions/users';
import {startSetProjects} from './actions/projects';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Approute/>
  </Provider>
)

let hasRendered = false;
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('root'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>,document.getElementById('root'))

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
          store.dispatch(readUser(user.uid)).then(()=>{
          //const role = store.getState().auth.position
        
          
             store.dispatch(startSetUsers()).then(()=>{
              const list = store.getState().users;
              console.log(list)

              const current_user = store.getState().auth;

              store.dispatch(startSetProjects(current_user)).then(()=>{
                const projects = store.getState().projects;
               console.log(projects);
                renderApp(); 
    
              if(history.location.pathname==='/'||history.location.pathname==='/signup'){
                  history.push('/dashboard')
              } 

              })
                
             })
          
          // else{
          //   const current_user = store.getState().auth;

          //   store.dispatch(startSetProjects(current_user)).then(()=>{
          //     const projects = store.getState().projects;
          //     console.log(projects);
          //     renderApp(); 
  
          //   if(history.location.pathname==='/'||history.location.pathname==='/signup'){
          //       history.push('/dashboard')
          //   } 

          //   })

          // }

          // const list = store.getState().users;
          // console.log(list)
          // renderApp(); 

          // if(history.location.pathname==='/'||history.location.pathname==='/signup'){
          //     history.push('/dashboard')
          // } 
          })
  }else{
      //store.dispatch(logout());
      renderApp()
      history.push('/')
  }
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
