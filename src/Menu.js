import React, { Component } from 'react';
import {
  Container, Menu, Icon
} from 'semantic-ui-react'


class MenuBar extends Component {
    
    render() {
        
        return(
            <Menu fixed='top' inverted>
                <Container text>
                    <Menu.Item as='a' header>
                        <Icon name='food' />My Recipe
                    </Menu.Item>
                    <Menu.Item position='right' onClick={this.props.loadSamples} >
                        <Icon name='edit' />
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}

export default MenuBar