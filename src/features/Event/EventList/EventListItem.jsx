import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttende from './EventListAttende';

 class EventListItem extends Component {
    render() {
        return (
            <React.Fragment>
                     <Segment.Group>
                        <Segment>
                          <Item.Group>
                            <Item>
                              <Item.Image size="tiny" circular src={this.props.event.hostPhotoURL} />
                              <Item.Content>
                                <Item.Header as="a">{this.props.event.title}</Item.Header>
                                <Item.Description>
                                  Hosted by  {this.props.event.hostedBy}
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Item.Group>
                        </Segment>
                        <Segment>
                          <span>
                            <Icon name="clock" /> {this.props.event.date} |
                            <Icon name="marker" /> {this.props.event.venue}
                          </span>
                        </Segment>
                        <Segment secondary>
                          <List horizontal>
                            {this.props.event.attendee&&this.props.event.attendees.map(attendee=>  
                              <EventListAttende key={attendee.id} attendee={attendee} /> )
                              }
                           
                          

                          </List>
                        </Segment>
                        <Segment clearing>
                          <p>{this.props.event.description}  </p>
                          <Button as="a" color="teal" floated="right" content="View" />
                        </Segment>
                      </Segment.Group>  
            </React.Fragment>
        )
    }
}
export default EventListItem;
