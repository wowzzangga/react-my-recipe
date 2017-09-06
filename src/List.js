import React from 'react'
import {
  Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const List = () => (
  <div>
    <Header
      as='h1'
      content='My Recipes'
      style={style.h1}
      textAlign='center'
    />
    <Container text>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

  </div>
)

export default List