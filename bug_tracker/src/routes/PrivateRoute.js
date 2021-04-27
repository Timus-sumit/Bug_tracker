import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Sidebar from '../components/sidebar';
import Header from  '../components/Header'
// import Footer from '../components/Footer';
import 'reactstrap';

const PrivateRoute = ({isAuthenticated,component:Component,...rest})=>(
    <Route {...rest} component={(props)=>(
        isAuthenticated?(
            <div>
                <Sidebar />
                <div className="main-content pl-5 pt-5 pr-5">
                    <Header/>
                   <Component {...props}/>
                </div> 
            </div>):(<Redirect to='/' />)
    )} />
)
const mapStateToProps = (state)=>{
    return{
        isAuthenticated : !! state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute);