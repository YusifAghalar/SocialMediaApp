import React from 'react'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSideBar from './EventDetailedSideBar';
import { Grid } from 'semantic-ui-react';

export default function EventDetailedPage() {
    return (
       <Grid>
           <Grid.Column width={10}>
                <EventDetailedHeader/>
                <EventDetailedInfo/>
                <EventDetailedChat/>
           </Grid.Column>
           <Grid.Column width={6}>
               <EventDetailedSideBar/>
           </Grid.Column>
       </Grid>
    )
}
