import React, { Component } from 'react';
import './ViewBookExchange.css';
import { Redirect, Link} from 'react-router-dom';
import Item from '../../Home/BookSlider/Item/Item';
import Cookies from 'universal-cookie';
class ViewBookExchange extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
            books: []
        };
    }
    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/traderq/user', {
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
                    <div className="ViewBookExchange-content">
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
            </div>
        );      
    }
}

export default ViewBookExchange;