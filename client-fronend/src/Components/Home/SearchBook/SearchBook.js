import React, { Component } from 'react';
import './SearchBook.css';
import { withRouter } from 'react-router-dom';
import Item from '../BookSlider/Item/Item';

class SearchBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        };
    }

    // componentWillMount(){}
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/book/category/'+this.props.match.params.category)
        .then(res => res.json())
        .then(json => {
            this.setState({books: json.books});
        })
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        return (
            <div className="SearchBook">
                {
                    this.state.books.map(book => (
                        <Item key={book._id} key_data={book._id} image={book.image} name={book.name} author={book.author} price={book.price}/>
                    ))
                }
            </div>
        );
    }
}

export default withRouter(SearchBook);