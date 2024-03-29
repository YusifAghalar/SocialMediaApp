import React, { Fragment } from 'react'
import { Segment, Item, Label } from 'semantic-ui-react';

export default function EventDetailedSideBar({ attendees }) {
  return (
    <Fragment>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees && attendees.length} {attendees && attendees.lenght === 1 ? 'Person' : 'People'}  Going
              </Segment>
      <Segment attached>
        <Item.Group divided>
          {attendees && attendees.map(attendee =>

            <Item style={{ position: 'relative' }}>

              <Label
                style={{ position: 'absolute' }}
                color='orange'
                ribbon='right'
              >
                Host
                    </Label>
              <Item.Image size='tiny' src={attendee.photoURL} />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>{attendee.name}</Item.Header>
              </Item.Content>
            </Item>

          )}

        </Item.Group>
      </Segment>
    </Fragment>
  )
}
