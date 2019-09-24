import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import {NavLink,Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                 <Menu inverted fixed="top">
                        <Container>
                          <Menu.Item as={NavLink} exact to="/" header>
                            <img src="assets/logo.png" alt="logo" />
                            Social Media
                          </Menu.Item>
                          <Menu.Item  as={NavLink} to="/events" name="Events" />
                          <Menu.Item  as={NavLink} to="/test" name="Test" />
                          <Menu.Item as={Link} to="/createEvent">
                            <Button floated="right" positive inverted content="Create Event" />
                          </Menu.Item>
                          <Menu.Item position="right">
                            <Button basic inverted content="Login" />
                            <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                          </Menu.Item>
                        </Container>
                  </Menu>   
            </div>
        )
    }
}
