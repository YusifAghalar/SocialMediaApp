import React from 'react'
import { Button } from 'semantic-ui-react';

const SignOutPage = (props) => {

    const {handleAuth}=props;
    return (
        <React.Fragment>
            <Button basic  onClick={handleAuth}  inverted content="Login" />
            <Button basic inverted content="Register" style={{marginLeft: '0.5em'}}/> 
        </React.Fragment>
    )
}

export default SignOutPage
