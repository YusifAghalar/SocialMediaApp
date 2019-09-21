import React from 'react';
import EventDashboard from '../../features/Event/EventDashboard/EventDashboard';
import Navbar from '../../features/Navbar/Navbar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
      <React.Fragment>
        <Navbar/>
        <Container className="main">
          <EventDashboard/>
        </Container>
      </React.Fragment>
  );
}

export default App;
