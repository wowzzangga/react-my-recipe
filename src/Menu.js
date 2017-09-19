import React, { Component } from 'react';
import {
  Container, Menu, Icon, Button
} from 'semantic-ui-react'


class MenuBar extends Component {
    
    render() {
        return(
            <Menu fixed='bottom' inverted>
                <Container text>
                    <Menu.Item as='a' header>
                        <Icon name='food' />My Recipe
                    </Menu.Item>
                    <Menu.Item position='right' href='/recipe/new'>
                        <Icon name='edit' />
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}

export default MenuBar