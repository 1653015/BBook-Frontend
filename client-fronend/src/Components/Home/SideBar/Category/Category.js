import React, {Component} from 'react';
import './Category.css';

class Category extends Component {
    render(){
        return(
            <div className="category-item">{this.props.category.toUpperCase()}</div>
        );
    }
}

export default Category;