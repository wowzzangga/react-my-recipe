import React, { Component } from 'react'

import {
  Item, List
} from 'semantic-ui-react'

class ListContent extends Component {

  render() {
    const { details } = this.props;

    const Ingredients = details.ingredient.map((item) =>
      <List.Item key={item}>{item}</List.Item> 
    );

    const tagData = (typeof details.tag === 'undefined') ? [] : details.tag; 
    const tags = tagData.map((tag) => 
        <List.Item key={tag}>#{tag}</List.Item> 
    )

    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>Ingredients</Item.Header>
                    <Item.Description>
                        <List>{Ingredients}</List>
                    </Item.Description>  
                </Item.Content>
            </Item>
            <Item>
                <Item.Content>
                    <Item.Header>Method</Item.Header>
                    <Item.Description>{details.method}</Item.Description>
                </Item.Content>
            </Item>
            <Item>
            <Item.Content>
                <Item.Header>Tags</Item.Header>
                <Item.Description>
                    <List horizontal>{tags}</List>
                </Item.Description>
            </Item.Content>
        </Item>
        </Item.Group>
    )
  }
}

export default ListContent