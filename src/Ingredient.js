import React, { Component } from 'react'

import { Form } from 'semantic-ui-react'

class Ingredient extends Component {

  render() {

    return (
        <Form.Input
            fluid
            placeholder='Ingredients'
            name='ingredients' value={this.props.details} onChange={this.props.handleChange}
        />   
    )
  }
}

export default Ingredient