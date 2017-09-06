import React from 'react'
import {
Container, Grid, Segment,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  last: {
    marginBottom: '300px',
  },
}

const Recipe = () => (
  <div>
    <Container text>
        <Grid container columns={1} stackable>
            <Grid.Column>
                <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>Content</Segment>
            </Grid.Column>
        </Grid>
    </Container>

  </div>
)

export default Recipe