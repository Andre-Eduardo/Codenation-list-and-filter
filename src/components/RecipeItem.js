import React from 'react'

class RecipeItem extends React.Component {

      renderItens = (highlight, item)=>{
        let regExp = new RegExp(`(${highlight})`, 'ig');
        let selects = item.split(regExp);
        return ( selects.map((select, i) => {
                if (select.toLowerCase() === highlight.toLowerCase()) {
                    return <mark key={i}>{select}</mark>
                }
                return select;
            }) 
        )


      }

    render() { 
        
        return (
            <div className="col-sm-3 mt-4">
                <div className="card">
                    <img className="card-img-top img-fluid" src={this.props.item.thumbnail} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{ this.renderItens(this.props.highlight,this.props.item.title)}</h5>
                        <p className="card-text">
                            <strong>Ingredients: </strong>{this.renderItens(this.props.highlight,this.props.item.ingredients)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeItem;