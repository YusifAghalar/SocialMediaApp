import React, { Component } from 'react'
import EventListItem from './EventListItem';

class EventList extends Component {
    render() {
        
        return (
            
            <React.Fragment>
                {this.props.events.map(event=>
                <EventListItem  deleteEvent={this.props.deleteEvent} key={event.id} event ={event}/>)}
            </React.Fragment>
        )
    }
}
export default EventList;
