import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import {reduxForm} from 'redux-form';
import {login} from './../authActions.js'
import {connect} from 'react-redux'

const actions={
  login
}

const LoginForm = ({login,handleSubmit}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button type='submit' fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null,actions)(reduxForm({form:"LoginForm"})(LoginForm));