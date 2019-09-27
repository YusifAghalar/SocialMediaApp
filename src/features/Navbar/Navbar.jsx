import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink,Link } from "react-router-dom"
import SignInPage from './SignInOutManager/SignInPage';
import SignOutPage from './SignInOutManager/SignOutPage';

export default class Navbar extends Component {

  state={
    authenticaded:true
  }

  handleAuth=()=>{
    this.setState(({authenticaded})=>({
      authenticaded:!authenticaded
    })
    )
  }
  
    render() {
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
                            {this.state.authenticaded?
                              <SignOutPage handleAuth={this.handleAuth}  />
                            :
                              <SignInPage handleAuth={this.handleAuth}/>
                            }
                          </Menu.Item>
                        </Container>
                  </Menu>   
            </div>
        )
    }
}
