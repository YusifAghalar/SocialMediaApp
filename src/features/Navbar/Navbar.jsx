import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink,Link } from "react-router-dom"
import SignInPage from './SignInOutManager/SignInPage';
import SignOutPage from './SignInOutManager/SignOutPage';
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import {openModal} from '../Modal/modalActions'
import {logout} from '../Auth/authActions'





const actions={
  openModal,
  logout
}

const mapState=(state)=>({
  auth:state.auth
})
class Navbar extends Component {

  handleLogout=()=>{
    this.props.logout()
  }

  handleLogin=()=>{
    this.props.openModal("LoginModal");
  }
  handleRegister=()=>{
    this.props.openModal("RegisterModal");
  }
  
  
    render() {
        
        const {authenticated,currentUser}=this.props.auth
        
        console.log(authenticated);
        return (
            <div>
                 <Menu inverted fixed="top">
                        <Container>
                          <Menu.Item as={NavLink} exact to="/" header>
                            <img src="assets/logo.png" alt="logo" />
                            Social Media
                          </Menu.Item>
                          <Menu.Item  exact as={NavLink} to="/events" name="Events" />
                          <Menu.Item  as={NavLink} to="/test" name="Test" />
                          <Menu.Item as={Link} to="/createEvent">
                          <Button floated="right" positive inverted content="Create Event" />
                          </Menu.Item>
                          <Menu.Item position="right">
                            {authenticated?
                                <SignInPage handleAuth={this.handleLogout}
                                currentUser={currentUser} />
                                :
                                <SignOutPage 
                                 handleRegister={this.handleRegister}
                                 handleLogin={this.handleLogin} 
                                  />
                            }
                          </Menu.Item>
                        </Container>
                  </Menu>   
            </div>
        )
    }
}
export default withRouter(connect(mapState,actions)(Navbar));
