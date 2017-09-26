import React, { Component } from 'react'

import {
  Item, List, Form, Label, Icon, Button, Header
} from 'semantic-ui-react'

class ListContent extends Component {

    constructor() {
        super();
        this.renderItemOrEditField = this.renderItemOrEditField.bind(this);
    }

    renderItemOrEditField() {

        const { itemId, editId, details } = this.props;

        const Ingredients = details.ingredient.map((item) =>
            <List.Item key={item}>{item}</List.Item> 
        );

        const tagData = (typeof details.tag === 'undefined') ? [] : details.tag; 

        if (editId === itemId) {
            return (
                <Item.Content>
                    <Item.Description>
                        <Header as='h4'>
                            <Header.Content>Title</Header.Content>
                        </Header>
                        <Form.Input
                            fluid
                            name='title' 
                            defaultValue={details.title} 
                            onChange={(e) => this.props.handleEditField(e, itemId)}
                        /> 
                    </Item.Description>
                    <Item.Description>
                        <Header as='h4'>
                            <Header.Content>Ingredients</Header.Content>
                        </Header>
                        <Form.Input
                            fluid
                            name='ingredients' 
                            defaultValue={details.ingredient} 
                            onChange={(e) => this.props.handleEditField(e, itemId)}
                        /> 
                    </Item.Description>
                    <Item.Description>
                        <Header as='h4'>
                            <Header.Content>Method</Header.Content>
                        </Header>
                        <Form.TextArea
                            name='method' defaultValue={details.method} 
                            onChange={(e) => this.props.handleEditField(e, itemId)}
                        />
                    </Item.Description>
                    <Item.Extra>
                        <Button primary floated='right'>
                            <Icon name="trash" onClick={() => this.props.removeRecipe(itemId)} />
                            Delete
                        </Button>

                        <Button primary floated='right' onClick={this.props.toggleEditing.bind(null, null)}>
                            <Icon name="check" />
                            Done
                        </Button>

                        {tagData.map((tag) => 
                            <Label key={tag} as='a'>
                                <Icon name='tag' />
                                {tag}
                                <Icon name='delete' />
                            </Label>
                        )}
                    </Item.Extra>
                </Item.Content>
            )

        } else {

            return (
                <Item.Content>
                    <Item.Header as='a'>{details.title}</Item.Header>
                    <Item.Description className='recipe-list-container'>
                        <Header as='h4'>
                            <Header.Content>Ingredients</Header.Content>
                        </Header>
                        <List bulleted>{Ingredients}</List>
                    </Item.Description>
                    <Item.Description className='recipe-list-container'>
                        <Header as='h4'>
                            <Header.Content>Method</Header.Content>
                        </Header>
                        {details.method}
                    </Item.Description>
                    <Item.Extra className='recipe-list-container'>
                        <Button primary floated='right' onClick={() => this.props.removeRecipe(itemId)} >
                            <Icon name="trash" />
                            Delete
                        </Button>

                        <Button primary floated='right' onClick={this.props.toggleEditing.bind(null, itemId)}>
                            <Icon name="edit" />
                            Edit
                        </Button>

                        {tagData.map((tag) => 
                            <Label key={tag}>
                                <Icon name='tag' />
                                {tag}
                            </Label>
                        )}
                    </Item.Extra>
                </Item.Content>
            )
        }
    }

    render() {

        return (
            this.renderItemOrEditField()
        )
    }
}

export default ListContent