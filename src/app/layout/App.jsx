import React from 'react';
import EventDashboard from '../../features/Event/EventDashboard/EventDashboard';
import Navbar from '../../features/Navbar/Navbar';
import { Container } from 'semantic-ui-react';
import EventDetailedPage from '../../features/Event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/User/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/User/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/User/Settings/SettingsDashboard';
import { Route } from 'react-router-dom';
import EventForm from '../../features/Event/EventForm/EventForm';
import HomePage from '../../features/Home/HomePage';


function App() {
  return (
  <React.Fragment>
    
        <Route exact  path="/"  component={HomePage}    />
        <Route exact  path="/(.+)"  render={()=>(
          <React.Fragment>
            <Navbar/>
            <Container className="main">
              <Route exact  path="/events"  component={EventDashboard}    />
              <Route exact  path="/events/:id"  component={EventDetailedPage}    />
              <Route exact  path="/people"  component={PeopleDashboard}    />
              <Route exact  path="/profile/:id"  component={UserDetailedPage}    />
              <Route exact  path="/settings"  component={SettingsDashboard}    />
              <Route exact  path="/createEvent"  component={EventForm}    />
            </Container>
          </React.Fragment>
        )} />
     
       
      </React.Fragment>
      
  

  );
}

export default App;
