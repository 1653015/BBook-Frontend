import React, { Component } from 'react';
import './UserBookStorage.css';
import Item from '../../Home/BookSlider/Item/Item';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserBookStorage extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
            books: []
        };
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/books/stash', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                this.setState({books: json.books.books});
            }
        })        
    }

    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        if(!this.state.cookies.get('isLogin')){
            return(<Redirect path='/'/>)
        }

        if (this.state.books.length !== 0) {
            return (
                <div className="container">
                    <div className="UserBookStorage">
                            {
                                this.state.books.map(book => (
                                    <div key={book._id} className="item-box">
                                        <Item 
                                            categorieID={book.categories[0]} 
                                            key_data={book._id} 
                                            image={book.image} 
                                            name={book.name} 
                                            author={book.author}/>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            );
        } else {
            return (
                <div className="prompt">
                    <h1 className="message">Chưa có tựa sách nào trong kho</h1>
                    <Link to='/'>
                        <button className="to-buy">
                            Mua sách
                        </button>
                    </Link>
                </div>
            )
        }
    }
}

export default UserBookStorage;