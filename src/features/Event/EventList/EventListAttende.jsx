import React, { Component } from 'react'
import { Image, List } from 'semantic-ui-react';

 class EventListAttende extends Component {
    render() {
        return (
            <List.Item>
              <Image size="mini" circular as="a" src={this.props.attendee.photoURL} />
            </List.Item>
        )
    }
}
export default EventListAttende;
