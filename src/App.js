import React, { Component } from 'react';
import {
  Header, Divider,
} from 'semantic-ui-react'

import List from './List';
import Recipe from './Recipe';

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
    const timestamp = Date.now();

    recipes[`${timestamp}`] = recipe;
    this.setState({recipes});

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

        <List recipies={this.state.ceipes} />

        <Divider section />

        <Recipe addRecipe={this.addRecipe} />
        

      </div>
    );
  }

}

export default App;