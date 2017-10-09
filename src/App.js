import React, { Component } from 'react'
import Samples from './sample'
import List from './List'
import MenuBar from './Menu'
import AddRecipeForm from './AddRecipeForm'

import base from './base'
import { Container, Divider } from 'semantic-ui-react'

import './App.css';

class App extends Component {

    constructor() {
      super()
    
      this.toggleEditing = this.toggleEditing.bind(this)

      // getInitialState
      this.state = {
        recipes : {},
        editId : null,
        ingredients: [],
        tags :[],
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
      const ingredients = [];
      const tags = [];

      this.setState({ recipes, ingredients, tags });
    }

    addIngredient = (ingredient) => {
      const ingredients = [...this.state.ingredients];
      ingredients[ingredients.length] = ingredient

      this.setState({ 
        ingredients: ingredients 
      })
    }

    removeIngredient = (idx) => {
      const ingredients = [...this.state.ingredients];
      ingredients.splice(idx, 1);

      this.setState({ 
        ingredients: ingredients 
      })
    };

    addTag = (tag) => {
      const tags = [...this.state.tags];
      tags[tags.length] = tag

      this.setState({ 
        tags: tags 
      })
    }

    removeTag = (idx) => {
      const tags = [...this.state.tags];
      tags.splice(idx, 1);

      this.setState({ 
        tags: tags 
      })
    };

    render() {

      return (
        <div>
          <MenuBar loadSamples={this.loadSamples} />  
          <Container text style={{ marginTop: '5em' }}>      
          <List
            recipes={this.state.recipes} 
            editId={this.state.editId} 
            toggleEditing={this.toggleEditing} 
            updateRecipe={this.updateRecipe}
            removeRecipe={this.removeRecipe}
          />
                  
          <Divider horizontal>+ Add New Recipe</Divider>
        
          <AddRecipeForm 
            addRecipe={this.addRecipe} 
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}
            addTag={this.addTag} 
            removeTag={this.removeTag}
            ingredients={this.state.ingredients}
            tags={this.state.tags} 
          />
          </Container>
        </div>
      );
    }

}

export default App;