import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttende from './EventListAttende';

 class EventListItem extends Component {
    render() {
      console.log(this.props.selectEvent)
      const {selectEvent,event,deleteEvent }=this.props;
        return (
            <React.Fragment>
                     <Segment.Group>
                        <Segment>
                          <Item.Group>
                            <Item>
                              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                              <Item.Content>
                                <Item.Header as="a">{event.title}</Item.Header>
                                <Item.Description>
                                  Hosted by  {event.hostedBy}
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Item.Group>
                        </Segment>
                        <Segment>
                          <span>
                            <Icon name="clock" /> {event.date} |
                            <Icon name="marker" /> {event.venue}
                          </span>
                        </Segment>
                        <Segment secondary>
                          <List horizontal>
                            {event.attendee&&event.attendees.map(attendee=>  
                              <EventListAttende key={attendee.id} attendee={attendee} /> )
                              }
                           
                          

                          </List>
                        </Segment>
                        <Segment clearing>
                          <p>{this.props.event.description}  </p>
                          <Button as="a" onClick={()=>selectEvent(event)} color="teal" floated="right" content="View" />
                          <Button as="a" negative onClick={()=>deleteEvent(event.id)}  floated="right" content="Delete" />


                        </Segment>
                      </Segment.Group>  
            </React.Fragment>
        )
    }
}
export default EventListItem;
