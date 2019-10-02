import React, { Component } from 'react'
import { Dropdown, Image } from 'semantic-ui-react';
import {openModal }from '../../Modal/modalActions';


const actions={
  openModal
}

class SignInPage extends Component {
    render() {
        const  {handleAuth}=this.props;
        return (
            <React.Fragment>
                  <Image avatar spaced="right" src='/assets/user.png' />
                  <Dropdown pointing="top left" text={this.props.currentUser}>
                    <Dropdown.Menu>
                      <Dropdown.Item text="Create Event" icon="plus" />
                      <Dropdown.Item text="My Events" icon="calendar" />
                      <Dropdown.Item text="My Network" icon="users" />
                      <Dropdown.Item text="My Profile" icon="user" />
                      <Dropdown.Item text="Settings" icon="settings" />
                      <Dropdown.Item onClick={handleAuth} text="Sign Out" icon="power" />
                    </Dropdown.Menu>
                  </Dropdown>
                </React.Fragment>
               
        )
    }
}
export default SignInPage;