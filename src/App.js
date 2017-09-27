import React, { Component } from 'react'
import Samples from './sample'
import List from './List'
import MenuBar from './Menu'
import base from './base'

import './App.css';

class App extends Component {

    constructor() {
      super()
    
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

    removeRecipe = (key) => {
      const recipes = {...this.state.recipes};
      recipes[key] = null;

      this.setState({ recipes });
    };
  
    addRecipe = (recipe) => {
      const recipes = {...this.state.recipes};
      let idx = 1;
      
      if (Object.keys(recipes).length !== 0) {
        const lastKey = Object.keys(recipes).reduce(function(a, b){ return recipes[a] > recipes[b] ? a : b });
        const maxIdx = lastKey.split('_');
        idx = parseInt(maxIdx[1], 10) + 1;
      }

      recipes[`recipe_${idx}`] = recipe;
      this.setState({ recipes });
    }

    render() {

      return (
        <div>
          <MenuBar loadSamples={this.loadSamples} />        
          <List
            recipes={this.state.recipes} 
            editId={this.state.editId} 
            toggleEditing={this.toggleEditing} 
            updateRecipe={this.updateRecipe}
            removeRecipe={this.removeRecipe}
            addRecipe={this.addRecipe}
          />

        </div>
      );
    }

}

export default App;