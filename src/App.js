import React, { Component } from 'react'
import {
  Header
} from 'semantic-ui-react'

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
          />

        </div>
      );
    }

}

export default App;