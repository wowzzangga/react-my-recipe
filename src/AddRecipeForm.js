import React, { Component } from 'react'
import {
  Item, Form, Button, Icon
} from 'semantic-ui-react'

import AddIngredient from './AddIngredient'
import RecipeTag from './RecipeTag'


class AddRecipeForm extends Component {

  constructor() {
    super();
    this.handleField = this.handleField.bind(this);
  }

  createRecipe(event) {
    event.preventDefault();

    const form = event.target;

    // make an array from input values
    const recipe = {
      title: form.title.value,
      ingredient: this.props.ingredients,
      method: form.method.value,
      tag: this.props.tags,
    }

    this.props.addRecipe(recipe);

    // clear form
    form.reset();
  }

  handleField( event ) {
    if ( event.which === 13 || event.keyCode === 13 ) {
      event.preventDefault();

      const input = event.target.value;

      if (event.target.name === 'tag') {
        this.props.addTag(input);
      
      } else {
        this.props.addIngredient(input);
        
      }

      event.target.value = '';
    }
  }

  render() {
    return (
      <Form size="large" onSubmit={(e) => this.createRecipe(e)}>
        <Item>
          <Item.Content>
            <Item.Description>
                <Form.Input
                    label='Title'
                    fluid
                    name='title' 
                    placeholder='title'
                /> 
            </Item.Description>
            <Item.Description>
                <Form.Input
                    label='Ingredients'
                    fluid
                    name='ingredient' 
                    placeholder='Enter ingredients'
                    onKeyDown={ this.handleField }
                /> 
                <AddIngredient 
                  ingredients={this.props.ingredients} 
                  addIngredient={this.props.addIngredient}
                  removeIngredient={this.props.removeIngredient}
                  />
            </Item.Description>
            <Item.Description>
                <Form.TextArea autoHeight
                    label='Method'
                    name='method' 
                    placeholder='Method'
                />
            </Item.Description>
            <Item.Extra>
              <Form.Input
                label='Tags'
                fluid
                name='tag' 
                placeholder='Enter tags'
                onKeyDown={ this.handleField }
              /> 
              <RecipeTag tags={this.props.tags} removeTag={this.props.removeTag} />
              <Button type='submit' primary floated='right'>
                  <Icon name="check" />
                  Add
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Form>
    )
  }
}

export default AddRecipeForm;
