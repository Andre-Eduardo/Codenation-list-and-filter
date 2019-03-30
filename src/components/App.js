import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: 'salt'
    };
  }

  filterSearchBar = (searchString) =>{
    
//console.log( this.recipes.map(recipe =>{return ((recipe.title.toUpperCase()).indexOf(this.state.searchString.toUpperCase()) != -1)}))
    var result = this.recipes.filter((result)=>{
      if(result.title.includes(this.state.searchString)){
           return true;

      }if(result.ingredients.includes(this.state.searchString)){
        return true;
      }else{
        return false;
      }

     
   })
   console.log(result)
  }
  render() { 
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-10">
          <div className="row">
            {(() => {
              if((this.state.searchString.localeCompare('') !== 0)){
                return this.recipes.map((recipe, id) =>{return <RecipeItem recipe={recipe} key={id} ></RecipeItem >});
                
              }else{
                
              }
            })()}
          {this.filterSearchBar()}
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
