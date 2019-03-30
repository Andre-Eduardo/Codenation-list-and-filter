import React from 'react'

class RecipeItem extends React.Component {

      state = {
        recipe: this.props.recipe ,
    
      };

    render() { 
        //console.log(this.state.recipe);
        return (
            <div className="col-sm-3 mt-4">
                <div className="card">
                    <img className="card-img-top img-fluid" src={this.state.recipe.thumbnail} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.recipe.title}</h5>
                        <p className="card-text">
                            <strong>Ingredients: </strong>{this.state.recipe.ingredients}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeItem;