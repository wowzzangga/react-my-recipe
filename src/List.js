import React, { Component } from 'react'
import {
  Container, Item, Form
} from 'semantic-ui-react'

import ListContent from './ListContent'

class List extends Component {

  constructor() {
    super();
    this.handleEditField = this.handleEditField.bind(this);
  }

  handleEditField(e, key) {
    const recipe = this.props.recipes[key];

    // take a copy of that recipe and update it with the new data
    const updatedRecipe = {
      ...recipe,
      [e.target.name]: e.target.value
    }

    this.props.updateRecipe(key, updatedRecipe);
  }

  render() {
    const { recipes, editId } = this.props;

    return (
      <Container text style={{ marginTop: '5em' }}>
        <Form size="large">
          <Item.Group divided>
          {
            Object.keys(recipes).map(key => 
            <Item key={key}>
                <ListContent 
                  itemId={key} 
                  details={recipes[key]} 
                  toggleEditing={this.props.toggleEditing} 
                  updateRecipe={this.props.updateRecipe}
                  removeRecipe={this.props.removeRecipe}
                  handleEditField={this.handleEditField}
                  editId={editId} 
                />
            </Item>
            )
          }
          </Item.Group>
        </Form>
      </Container>
    )
  }
}

export default List
