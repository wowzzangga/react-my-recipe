import React, { Component } from 'react'

import {
  Item, List, Form, Label, Icon
} from 'semantic-ui-react'

class ListContent extends Component {

    constructor() {
        super();
        this.renderItemOrEditField = this.renderItemOrEditField.bind(this);
    }

    renderItemOrEditField(details) {

        const { itemId, editId } = this.props;

        const Ingredients = details.ingredient.map((item) =>
            <List.Item key={item}>{item}</List.Item> 
        );

        const tagData = (typeof details.tag === 'undefined') ? [] : details.tag; 
        /*
        const tags = tagData.map((tag) => 
            <Label key={tag} as='a'>
                <Icon name='tag' />
                {tag}
                <Icon name='delete' />
            </Label>
        )*/


        if (editId === itemId) {
            return (
                <Form size='large' >
                    <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header>Ingredients</Item.Header>
                            <Item.Description>
                                <Form.Input
                                fluid
                                name='ingredients' 
                                defaultValue={details.ingredient} 
                                /> 
                            </Item.Description>  
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Header>Method</Item.Header>
                            <Item.Description>
                                <Form.TextArea
                                name='method' defaultValue={details.method} 
                                onChange={(e) => this.props.handleEditField(e, itemId)}
                                />
                            </Item.Description>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Content>
                            <Item.Header>Tags</Item.Header>
                            <Item.Description>
                            {tagData.map((tag) => 
                                <Label key={tag} as='a'>
                                    <Icon name='tag' />
                                    {tag}
                                    <Icon name='delete' />
                                </Label>
                            )}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    </Item.Group>
                </Form>
            )  
        } else {

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
                            <Item.Description>
                                <p onClick={this.props.toggleEditing.bind(null, itemId)}>{details.method}</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content>
                            <Item.Header>Tags</Item.Header>
                            <Item.Description>
                            {tagData.map((tag) => 
                                <Label key={tag}>
                                    <Icon name='tag' />
                                    {tag}
                                </Label>
                            )}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            )
        }
    }

    render() {
        const { details } = this.props;

        return (
            this.renderItemOrEditField(details)
        )
    }
}

export default ListContent