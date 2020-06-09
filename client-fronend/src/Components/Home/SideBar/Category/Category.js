import React, {Component} from 'react';
import './Category.css';

import { Link } from 'react-router-dom';

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.reloadPage = this.reloadPage.bind(this);
    }
    reloadPage(){
        window.location.reload(false);
    }

    render(){
        return(
            <div onClick={this.reloadPage}>
                <Link to={`/search/${this.props.key_data}/books`}>
                    <div className="category-item">
                        {this.props.category.toUpperCase()}
                    </div>
                </Link>
            </div>
        );
    }
}

export default Category;