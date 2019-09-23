import React from 'react'
import { Container, Segment, Button, Icon, Header, Image } from 'semantic-ui-react';

export default function HomePage({history}) {
    return (
        <div>
                <Segment inverted textAlign='center' vertical className='masthead'>
                <Container text>
                  <Header as='h1' inverted>
                    <Image
                      size='massive'
                      src='/assets/logo.png'
                      alt='logo'
                      style={{ marginBottom: 12 }}
                    />
                    Re-vents
                  </Header>
                  <Button size='huge' onClick={()=>history.push("/events") } inverted>
                    Get started
                    <Icon name='right arrow'  inverted />
                  </Button>
                </Container>
              </Segment>
        </div>
    )
}
