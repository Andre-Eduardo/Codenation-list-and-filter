import React from 'react'

class RecipeItem extends React.Component {

      state = {
        reciple: this.props.reciple ,
    
      };

    render() { 
        console.log(this.state.reciple);
        return (
            <div className="col-sm-3 mt-4">
                <div className="card">
                    <img className="card-img-top img-fluid" src={this.state.reciple.thumbnail} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.reciple.title}</h5>
                        <p className="card-text">
                            <strong>Ingredients: </strong>{this.state.reciple.ingredients}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeItem;