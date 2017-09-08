import React, { Component } from 'react'
import {
  Header, Divider
} from 'semantic-ui-react'

import List from './List'
import Recipe from './Recipe'
import MenuBar from './Menu'

import './App.css';


const style = {
  h1: {
    marginTop: '3em',
  },
}

class App extends Component {

  constructor() {
    super()
    this.addRecipe = this.addRecipe.bind(this)

    // getInitialState
    this.state = {
      recipes : {},
    }
  }

  addRecipe(recipe) {

    const recipes = {...this.state.recipes};

    var idx = Object.keys(recipes).length
    recipes[`recipe-${idx}`] = recipe
    

    this.setState({recipes})
  }
  
  render() {

    return (
      <div>
        <Header
          as='h1'
          content='My Recipes'
          style={style.h1}
          textAlign='center'
        />

        <List recipes={this.state.recipes} />

        <Divider section />

        <Recipe addRecipe={this.addRecipe} />
        
        <MenuBar />        
      </div>
    );
  }

}

export default App;