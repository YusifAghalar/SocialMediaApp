import React from 'react'
import { Button,Header,Segment,Item,Image } from 'semantic-ui-react';
import {Link} from "react-router-dom"

export default function EventDetailedHeader({event}) {
    const eventImageStyle = {
        filter: 'brightness(30%)'
    };
    
    const eventImageTextStyle = {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        width: '100%',
        height: 'auto',
        color: 'white'
    };
    let imageUrl=event.category+".jpg"
    return (
      
       
        <div>
               <Segment.Group>
                    <Image src={'/assets/categoryImages/'+imageUrl} fluid style={eventImageStyle} />
                  <Segment basic attached="top" style={{ padding: '0' }}>
            
                    <Segment basic style={eventImageTextStyle}>
                      <Item.Group>
                        <Item>
                          <Item.Content>
                            <Header
                              size="huge"
                              content={event.title}
                              style={{ color: 'white' }}
                            />
                            <p>{event.date}</p>
                            <p>
                              Hosted by <strong>{event.hostedBy}</strong>
                            </p>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                  </Segment>
            
                  <Segment attached="bottom">
                    <Button>Cancel My Place</Button>
                    <Button color="teal">JOIN THIS EVENT</Button>
            
                    <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
                      Manage Event
                    </Button>
                  </Segment>
                </Segment.Group>
        </div>
    )
}
