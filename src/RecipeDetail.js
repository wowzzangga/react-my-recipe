import React from 'react'
import {
  Container, Grid, Segment, Button, Form
} from 'semantic-ui-react'


const RecipeDetail = ( { match } ) => {

    return (
      <Container text>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column>
              <Segment stacked>
                See your recipe { match.params.id }
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
    )
}

export default RecipeDetail