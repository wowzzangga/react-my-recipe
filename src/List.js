import React, { Component } from 'react'
import {
  Container, Accordion
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

    const panels = Object.keys(recipes)
                    .map(key => ({
                      key: `panel-${key}`,
                      title: recipes[key].title,
                      content: (
                        <ListContent 
                          itemId={key} 
                          details={recipes[key]} 
                          toggleEditing={this.props.toggleEditing} 
                          updateRecipe={this.props.updateRecipe}
                          handleEditField={this.handleEditField}
                          editId={editId} 
                        />
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
