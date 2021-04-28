import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Loginpage from '../components/Loginpage';
import Signup from '../components/Signup';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import UserRoles from '../components/UserRoles';
import AddProject from '../components/AddProject';
import EditProject from '../components/EditProject';
import ManageUsers from '../components/ManageUsers';
import details from '../components/details';
import CreateTicket from '../components/CreateTicket';
import EditTicket from '../components/EditTicket';
import UserTickets from '../components/UserTickets';
import Home from '../components/Home';
export const history = createHistory();

const Approute =()=>{
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" component={Loginpage} exact={true}/>
                <Route path="/signup" component={Signup}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path="/userroles" component={UserRoles}/>
                <PrivateRoute path="/addProject" component={AddProject}/>
                <PrivateRoute path="/editProject/:id" component={EditProject} />
                <PrivateRoute path="/manageusers/:id" component={ManageUsers}/>
                <PrivateRoute path ="/details/:id" component={details}/>
                <PrivateRoute path="/createTicket/:id" component={CreateTicket}/>
                <PrivateRoute path="/editTicket/:id/:ticketId" component={EditTicket}/>
                <PrivateRoute path="/userTickets" component={UserTickets}/>
                <PrivateRoute path="/home" component={Home}/>
            </Switch>
        </Router>
    )
}

export default Approute;