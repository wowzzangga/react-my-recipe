import React, { Component } from 'react'
import {
  Container, Grid, Segment, Button, Form
} from 'semantic-ui-react'


class Recipe extends Component {
      
  state = { title: '', ingredients: '', method: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  createRecipe(event) {
    event.preventDefault()

    const recipe = {
      title : this.state.title,
      ingredients : this.state.ingredients,
      method: this.state.method
    }

    this.props.addRecipe(recipe)
  }

  render() {
    const { title, ingredients, method } = this.state

    return (
      <Container text>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column>
            <Form size='large' onSubmit={(e) => {this.createRecipe(e)}} >
              <Segment stacked>
                <Form.Input
                  fluid
                  placeholder='Title'
                  name='title' value={title} onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  placeholder='Ingredients'
                  name='ingredients' value={ingredients} onChange={this.handleChange}
                />
                <Form.TextArea
                  placeholder='Method'
                  name='method' value={method} onChange={this.handleChange}
                />    
                <Button type="submit" color='teal' fluid size='large'>Save</Button>
              </Segment>
            </Form>
            </Grid.Column>
          </Grid>
        </Container>
        
    );
  }
}

export default Recipe