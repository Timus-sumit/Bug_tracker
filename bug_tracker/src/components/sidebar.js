import React from "react";
import { NavLink, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";



class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };

  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };

  render() {
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
            <NavbarBrand className="pt-0 text-center brand" >
              <Link to="/home"> 
              
              <h1 className="pageheader">BUG TRACKER</h1>

              </Link> 
            </NavbarBrand>
          {/* User */}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem href="#pablo" onClick={this.props.startLogout}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar className="collapse-bar" isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row >
                  <Col className="collapse-brand" xs="6">
                      <Link to='/dashboard'>
                        <img className="collapse-img"  src='/logo.jpg' />
                      </Link>
                  </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Form */}
            {/* Navigation */}
            <Nav navbar>
                <NavItem className="pl-4 my-1">
                    <NavLink to="/home" className="row">
                        <i class="fas fa-home mx-2"></i>
                        <h3 className="text-black  pageheader" >Home</h3>
                    </NavLink>
                </NavItem>
                {this.props.user.position==='admin' && 
                <NavItem className="pl-4 my-1">
                <NavLink to='/userroles' className="row">
                <i class="fas fa-user-friends mx-2"></i>
                <h3 className="text-black yt-style pageheader" >Manage Role Assignmet</h3>
                </NavLink>
                </NavItem> }
                <NavItem className="pl-4 my-1">
                <NavLink to="/userTickets" className="row">
                    <i class="fas fa-ticket-alt mx-2"></i>
                    <h3 className="text-black yt-style pageheader" >My Tickets</h3>
                </NavLink>
                </NavItem>
                <NavItem className="pl-4 my-1">
                    <NavLink to="/dashboard" className="row">
                        <i class="fas fa-clipboard mx-2"></i>
                        <h3 className="text-black yt-style pageheader" >My Projects</h3>
                    </NavLink>
                </NavItem>
 
            </Nav>
            {/* Divider */}
            <hr className="my-3" />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogout : ()=>dispatch(startLogout())
    }
}
const mapStateToProps = (state)=>{
    return{
        user:state.auth
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
