import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './Exchange.css';
import { Redirect } from 'react-router-dom';
import ItemExchange from './ItemExchange/ItemExchange';

class Exchange extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
            books: []
        };
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        if(!this.state.cookies.get('isLogin')){
            return(<Redirect path='/'/>)
        }
        return (
                <div className="Exchange">
                {
                    this.state.books.map(book => (
                        <div key={book._id} className="item-box">
                            <ItemExchange  key_data={book._id} image={book.image} name={book.name} owner={book.owner} price={book.price}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Exchange;