import React, { Component } from '../../../../node_modules/react'
import { Grid,  } from '../../../../node_modules/semantic-ui-react';
import EventList from '../EventList/EventList'; 
import {create_event,update_event,delete_event } from '../eventActions';
import { connect } from 'react-redux';


const mapState=(state)=>({
  data:state.event,

  
})
const actions={
  create_event,
  update_event,
  delete_event,
}
 class EventDashboard extends Component {

    state={
        isOpen:true,
        authenticated:false
    };
    
    handleDeleteEvent = (id)=>(
      this.props.delete_event(id)
    )
    handleUpdateEvent = (updatedEvent)=>(
      this.props.update_event(update_event)
      )
      

    render() {
        return (
           <Grid>
               <Grid.Column width={10}>
                    <EventList events={this.props.data}  deleteEvent={this.handleDeleteEvent} />
               </Grid.Column>
               <Grid.Column width={6}>
                   <h1>Attendee list</h1>
                </Grid.Column>
           </Grid>
        )
    }
}
export default connect(mapState,actions)(EventDashboard)
