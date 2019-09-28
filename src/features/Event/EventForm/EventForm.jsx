import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { create_event, update_event } from '../eventActions'




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
  return { event };

}

const actions = {
  create_event,
  update_event,
}
class EventForm extends Component {


  state = { ...this.props.event };

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.id) {

      this.props.update_event(this.state);
      console.log(this.state);
    }
    else {
      let newEvent = { ...this.state }
      newEvent.id = Math.floor(Math.random() * 1000).toString();
      newEvent.hostPhotoURL = "/assets/user.png";
      this.props.create_event(newEvent);
      

    }
    
  }


  handleInputChange = ({ target }) => (
    this.setState((prevState) => (
      {
        [target.name]: target.value
      }
    )
    )

  )

  render() {
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              value={this.state.date}
              name="date"
              onChange={this.handleInputChange}
              type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              value={this.state.city}
              name="city"
              onChange={this.handleInputChange} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              value={this.state.venue}
              name="venue"
              onChange={this.handleInputChange} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              value={this.state.hostedBy}
              name="hostedBy"
              onChange={this.handleInputChange} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea
              value={this.state.description}
              name="description"
              onChange={this.handleInputChange} placeholder="Enter the Description of the event"
            >

            </textarea>
          </Form.Field>
          <Button positive type="submit">
            {this.state.id ? "Update" : "Create"}
          </Button>
          <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
        </Form>
      </Segment>
    )
  }
}
export default connect(mapStateToProps, actions)(EventForm); 
