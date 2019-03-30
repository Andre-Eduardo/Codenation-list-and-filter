import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
    };
  }

  filterSearchBar = (searchString) =>{
   var result = this.recipes.filter((result)=>{
      if(result.title.toLowerCase().includes(this.state.searchString.toLowerCase())){
       // console.log(result.title);
        return true;
        
        
      }if(result.ingredients.toLowerCase().includes(this.state.searchString.toLowerCase())){
        //console.log(result.ingredients);
        return true;
        
      }else{
        return false;
      } 
   })
   
   return result;

  }
  mapItems =() =>{
    var itens =this.filterSearchBar();
    console.log(itens);
    return itens.map((item, id) =>{ return <RecipeItem item={item} key={id}  highlight={this.state.searchString}></RecipeItem >});
  }
  passValue=(event)=>{
    this.setState({searchString:event});
    
  }
 
  render() { 
    
    return (
      <div className="App">
        <Navbar passValue ={this.passValue.bind(this)} />
        <div className="container mt-10">
          <div className="row">
            {(() => {
              if((this.state.searchString.localeCompare('') !== 0)){
                return this.mapItems();
              }else{
               
                return this.recipes.map((recipe, id) =>{return <RecipeItem item={recipe} key={id} highlight={this.state.searchString} ></RecipeItem >});
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
