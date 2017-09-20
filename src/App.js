import React, { Component } from 'react'
import {
  Header
} from 'semantic-ui-react'

import Samples from './sample'
import List from './List'
import AddRecipe from './AddRecipe'
import MenuBar from './Menu'
import base from './base'

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

  componentWillMount() {
    this.ref = base.syncState(`MyRecipes`, {
      context: this,
      state: 'recipes',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSamples = () => {
    this.setState({
      recipes: Samples
    });
  };

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

        <AddRecipe addRecipe={this.addRecipe} />

        <MenuBar loadSamples={this.loadSamples} />        
      </div>
    );
  }

}

export default App;