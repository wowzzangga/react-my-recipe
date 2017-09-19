import React, { Component } from 'react'
import {
  Container, Segment, Grid, Icon, Accordion
} from 'semantic-ui-react'

import ListContent from './ListContent'

const style = {
  w100: {
    width: '100%',
  },
}

class List extends Component {

  render() {
    const { recipes } = this.props;

    return (
      <Container text>
        {
          Object.keys(recipes)
          .map(key => 
              <Accordion styled key={key} style={style.w100}> 
                <Accordion.Title>
                  <Grid>
                    <Grid.Column floated='left' width={9}>
                      {recipes[key].title}
                    </Grid.Column>
                    <Grid.Column floated='right' width={1}>
                      <Icon name='chevron down' />               
                    </Grid.Column>
                  </Grid>
                </Accordion.Title>
                <Accordion.Content>
                  <ListContent details={recipes[key]} />
                </Accordion.Content>
              </Accordion>
          )
        }
      </Container>
    )
  }
}

export default List