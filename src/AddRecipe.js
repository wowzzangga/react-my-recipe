import React, { Component } from 'react'
import {
  Header, Divider
} from 'semantic-ui-react'

import Recipe from './Recipe'
import MenuBar from './Menu'

import './App.css';


const style = {
  h1: {
    marginTop: '3em',
  },
}

class AddRecipe extends Component {
  
  render() {

    return (
      <div>
        <Header
          as='h1'
          content='New Recipes'
          style={style.h1}
          textAlign='center'
        />

        <Recipe addRecipe={this.props.addRecipe} />

        <MenuBar />        
      </div>
    );
  }

}

export default AddRecipe;