import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { create_event, update_event } from '../eventActions'
 import {composeValidators,combineValidators,isRequired,isNumeric,hasLengthGreaterThan} from 'revalidate'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';




const mapStateToProps = (state, ownProps) => {
  let eventId = ownProps.match.params.id;
  let event = {
    title: '',
    description: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
  };
  if (eventId && state.event.length > 0) {
    event = state.event.filter(event => event.id === eventId)[0]
  }
  return {
    initialValues: event
  };

}
var validator= combineValidators({
  title:isRequired({message:"Title is required"}),
  description:composeValidators(
    isRequired({message:"Description is required"}),
    hasLengthGreaterThan(4)({message:"Description should be more than 5"})
    )(),
  venue:isRequired({message:"Venue is required"}),
  city:isRequired({message:"City is required"}),
  date:isRequired({message:"Date is reqired"}),
  category:isRequired({message:"Category can't be empty"})
})
const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' },
];
const actions = {
  create_event,
  update_event,
}
class EventForm extends React.Component {


  state = { ...this.props.event };

  onFormSubmit = (values) => {

    if (this.props.initialValues.id) {

      this.props.update_event(values);
      this.props.history.push(`/events/${values.id}`)
    }
    else {

      values.id = Math.floor(Math.random() * 1000).toString();
      values.hostPhotoURL = "/assets/user.png";
      this.props.create_event(values);
      this.props.history.push(`/events/${values.id}`)
    }

  }


  //  handleInputChange = ({ target }) => (
  //   this.setState((prevState) => (
  //     {
  //       [target.name]: target.value
  //     }
  //   )
  //   )

  // ) 

  render() {
    const {invalid}=this.props
    return (
      
      <Grid>
        <Grid.Column width={11}>

          <Segment>

            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Header sub color='teal' content='Event details' />
              <Field name='title' component={TextInput} placeholder="Event Title" />
              <Field name='category' component={SelectInput} multiple={true} options={category} placeholder="Category" />
              <Field name='description' component={TextArea} placeholder="Descripton" />
              <Header sub color='teal' content='Event details' />
              <Field name='city' component={TextInput} placeholder="City" />
              <Field name='venue' component={TextInput} placeholder="Venue" />
              <Field name='date' component={TextInput} placeholder="Date" type="date" />
              <Button positive  disabled={invalid} type="submit" content="Submit" />
              <Button basic type="submit" content="Cancel" />

            </Form>
          </Segment>

        </Grid.Column>

      </Grid>
    )
  }
}
export default connect(mapStateToProps, actions)(reduxForm({ form: 'eventForm' ,validate:validator})(EventForm)); 
