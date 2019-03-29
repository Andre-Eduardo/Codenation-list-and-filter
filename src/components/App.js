import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: 'b'
    };
  }

  filterSearchBar = (searchString) =>{
//console.log( this.recipes.map(recipe =>{return ((recipe.title.toUpperCase()).indexOf(this.state.searchString.toUpperCase()) != -1)}))
   
  }
  render() { 
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-10">
          <div className="row">
            {(() => {
              if((this.state.searchString.localeCompare('') != 0)){
                 return this.recipes.map((reciple, id) =>{return <RecipeItem reciple={reciple} key={id} ></RecipeItem >});
                
              }else{
                return this.recipes.map((reciple, id) =>{return <RecipeItem reciple={reciple} key={id} ></RecipeItem >});
              }
            })()}
          
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
