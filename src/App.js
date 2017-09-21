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
      this.toggleEditing = this.toggleEditing.bind(this)

      // getInitialState
      this.state = {
        recipes : {},
        editId : null,
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

    toggleEditing(editId) {
        this.setState({
          editId: editId
        });
    }

    updateRecipe = (key, updatedRecipe) => {
      const recipes = {...this.state.recipes};
      recipes[key] = updatedRecipe;

      this.setState({ recipes });
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

          <List recipes={this.state.recipes} 
            editId={this.state.editId} 
            toggleEditing={this.toggleEditing} 
            updateRecipe={this.updateRecipe}
          />

          <AddRecipe addRecipe={this.addRecipe} />

          <MenuBar loadSamples={this.loadSamples} />        
        </div>
      );
    }

}

export default App;