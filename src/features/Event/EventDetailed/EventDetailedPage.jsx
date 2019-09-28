import React from 'react'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSideBar from './EventDetailedSideBar';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {

    let event = {}
    const eventId = ownProps.match.params.id;
    if (state.event && state.event.length > 0) {

        event = state.event.filter(event => event.id === eventId)[0];
        console.log(event); 
        console.log(eventId); 

        
    }
    return {
        event
    }

}
function EventDetailedPage({ event }) {

    console.log(event)
    return (


        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSideBar attendees={event.attendees} />
            </Grid.Column>
        </Grid>
    )
}

export default connect(mapStateToProps)(EventDetailedPage)
