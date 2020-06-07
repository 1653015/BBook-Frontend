import React, {Component} from 'react';
import './Category.css';

import { Link } from 'react-router-dom';

class Category extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    render(){
        return(
            <Link to={`/search/${this.props.key_data}/books`}>
                <div className="category-item">
                    {this.props.category.toUpperCase()}
                </div>
            </Link>
        );
    }
}

export default Category;