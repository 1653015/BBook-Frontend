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
        if(this.state.books.length === 0){
            return(<div className="SearchBook text-white"> Không có sách </div>);
        }
        
        return (
            <div className="SearchBook">
                {
                    this.state.books.map(book => (
                        <div key={book._id} className="item-box">
                            <Item categorieID={this.props.match.params.category} key_data={book._id} image={book.image} name={book.name} author={book.author} price={book.price}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default withRouter(SearchBook);