import React, { Component } from 'react'
import {
  Item, Form, Button, Icon
} from 'semantic-ui-react'

class AddRecipeForm extends Component {

  createRecipe(event) {
    event.preventDefault();

    const form = event.target;

    // make an array from input values
    const recipe = {
      title: form.title.value,
      ingredient: [form.ingredient.value],
      method: form.method.value,
      tag: [form.tag.value],
    }

    this.props.addRecipe(recipe);
    
    // clear form
    form.reset();
  }

  render() {
    return (
      <Form size="large" onSubmit={(e) => this.createRecipe(e)}>
        <Item>
          <Item.Content>
            <Item.Description>
                <Form.Input
                    label='title'
                    fluid
                    name='title' 
                    placeholder='title'
                /> 
            </Item.Description>
            <Item.Description>
                <Form.Input
                    label='ingredients'
                    fluid
                    name='ingredient' 
                    placeholder='ingredients'
                /> 
            </Item.Description>
            <Item.Description>
                <Form.TextArea autoHeight
                    label='method'
                    name='method' 
                    placeholder='Method'
                />
            </Item.Description>
            <Item.Extra>
              <Form.Input
                label='tags'
                fluid
                name='tag' 
                placeholder='tags'
              /> 
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
