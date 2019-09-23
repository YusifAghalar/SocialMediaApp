import React, { Component } from '../../../../node_modules/react'
import { Grid, Button } from '../../../../node_modules/semantic-ui-react';
import EventList from '../EventList/EventList'; 
import EventForm from '../EventForm/EventForm.jsx';



const eventsHardCoded = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

 class EventDashboard extends Component {

    state={
        isOpen:true,
        events:eventsHardCoded,
        selectedEvent:null
    }

   

    createEventFormOpen=()=>{
      this.setState({
        isOpen:true,
        selectedEvent:null
      })
    }
    createEventFormClose=()=>{
      this.setState({
        isOpen:false,
      })
    }

    selectEvent=(sEvent)=>{
      this.setState({
        selectedEvent:sEvent,
        isOpen:true
      })
    }
    createNewEvent=(newEvent)=>{
      newEvent.id=Math.floor(Math.random() * 1000);
      newEvent.hostPhotoURL="/assets/user.png"
      this.setState(
        ({events}) =>(
          {
          events:[...events,newEvent],
          isOpen:false,
          })
        )
      }
    handleDeleteEvent = (id)=>(
      this.setState(({events}) =>(
       {events:events.filter(x=>x.id!==id)})
      )
    )
    handleUpdateEvent = (updatedEvent)=>(
      this.setState(({events})=>({
        events:events.map(event=>{
          if(event.id===updatedEvent.id)
            return {...updatedEvent}
          else
            return event
        })
      })
      
      )
    )  
      
    
      
    render() {
        return (
           <Grid>
               <Grid.Column width={10}>
                    <EventList events={this.state.events} selectEvent={this.selectEvent} deleteEvent={this.handleDeleteEvent} />
               </Grid.Column>
               <Grid.Column width={6}>
                    <Button  positive onClick={this.createEventFormOpen}  content="Create new Post" />
                    {this.state.isOpen&&
                    <EventForm  key={this.state.selectedEvent?this.state.selectedEvent.id:0}
                               selectedEvent={this.state.selectedEvent} 
                               createNewEvent={this.createNewEvent} 
                               toggleFormHandler={this.createEventFormClose}
                               updateEvent={this.handleUpdateEvent}
                               />}
                </Grid.Column>
           </Grid>
        )
    }
}
export default EventDashboard
