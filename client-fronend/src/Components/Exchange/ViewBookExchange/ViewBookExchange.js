import React, { Component } from 'react';
import './ViewBookExchange.css';
import { Redirect, Link} from 'react-router-dom';
import ItemExchange from '../ItemExchange/ItemExchange';
class ViewBookExchange extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        if(!this.props.cookies.get('isLogin')){
            return(<Redirect path='/'/>)
        }
        return (
            <div className='container'>
                <div className="ViewBookExchange">
                    <Link  className="post-trade-book"to="/exchange/create/book">Đăng ký đổi sách</Link>
                    {
                        this.state.books.map(book => (
                            <div key={book._id} className="item-box">
                                <ItemExchange  key_data={book._id} image={book.image} name={book.name} owner={book.owner} price={book.price}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ViewBookExchange;