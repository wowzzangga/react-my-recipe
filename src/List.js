import React, { Component } from 'react'
import {
  Container, Accordion
} from 'semantic-ui-react'

import ListContent from './ListContent'

class List extends Component {

  render() {
    const { recipes } = this.props;

    const panels = Object.keys(recipes)
                    .map(key => ({
                      key: `panel-${key}`,
                      title: recipes[key].title,
                      content: (
                        <ListContent key={key} details={recipes[key]} />
                      ),
                    })
                  )

    return (
      <Container text>
          <Accordion styled panels={panels} />
      </Container>
    )
  }
}

export default List