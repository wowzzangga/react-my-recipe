import React, { Component } from 'react'

import {
  Container, Segment,
} from 'semantic-ui-react'

class List extends Component {

  render() {
    const { recipes } = this.props;

    return (
      <Container text>
        <Segment.Group>
        {
          Object.keys(recipes)
          .map(key => 
            <Segment key={key}>{recipes[key].title}</Segment>
          )
        }
        </Segment.Group>
      </Container>
    )
  }
}

export default List