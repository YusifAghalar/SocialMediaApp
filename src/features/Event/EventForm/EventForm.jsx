import React, { Component } from 'react'
import { Segment, Form,Button } from 'semantic-ui-react';

 class EventForm extends Component {
   state={
     title:'',
     description:'',
     date:'',
     city:'',
     venue:'',
     hostedBy:'',
   }


   handleFormSubmit=(event)=>{
     event.preventDefault();
     this.props.createNewEvent(this.state);
   }
   

   handleInputChange=({target})=>(
     this.setState((prevState)=>(
      {
        [target.name]:target.value
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
                        <input 
                         value={this.state.description}
                         name="description"
                         onChange={this.handleInputChange} placeholder="Enter the Description of the event" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={this.props.toggleFormHandler} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
export default EventForm;
