import React, { Component } from 'react'
import {
  Container, Grid, Icon, Accordion
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

    const panels = Object.keys(recipes)
                    .map(key => ({
                      key: `panel-${key}`,
                      title: recipes[key].title,
                      content: (
                        <ListContent details={recipes[key]} />
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