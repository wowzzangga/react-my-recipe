import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

class AddIngredient extends Component {

  render() {

    return (
        <List divided verticalAlign='middle'>
            {this.props.ingredients.map((ingredients, idx) => 
            <List.Item key={ingredients}>
                <List.Content floated='right' as='a' onClick={(e) => this.props.removeIngredient(idx)}>
                    <List.Icon name='remove' />
                </List.Content>
                <List.Content>
                    <List.Icon name='checkmark' verticalAlign='top' />
                    {ingredients}
                </List.Content>
            </List.Item>
            )}
        </List>
    )
  }
}

export default AddIngredient