import React, { Component } from 'react';
import './ViewBookExchange.css';
import { Redirect, Link} from 'react-router-dom';
import Item from '../../Home/BookSlider/Item/Item';
import Cookies from 'universal-cookie';
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';


const breakPoints = [
    { width: 1, itemsToShow: 5, itemsToScroll: 5},
];

class ViewBookExchange extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
            books: [],
            tradedBooks: [],
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
        
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/books/traded', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                this.setState({tradedBooks: json.books.tradedBooks});
            }
        })
    }

    myArrow({ type, onClick}) {
        const pointer = type === 'PREV' ? '❮' : '❯';
        return (
            <button onClick={onClick} className="button-slider">
                {pointer}
            </button>
        );
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

        if (this.state.books.length !== 0 || this.state.tradedBooks.length !== 0) {
            return (
                <div className="container">
                    <div className="UserBookStorage">
                    <Link  className="post-trade-book"to="/exchange/create/book">Đăng ký đổi sách</Link>
                        <div className="BookSlider">
                            <div className="book-slider-title">Sách đổi của bạn</div>
                            {
                                
                                this.state.books.length === 0 ? (null) : (
                                    <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                                        {
                                            this.state.books.map(book => (
                                                <div className="relative-pos">
                                                    <Item 
                                                        categorieID={this.props.data_key} 
                                                        key={book._id} 
                                                        key_data={book._id} 
                                                        image={book.image} 
                                                        name={book.name} 
                                                        author={book.author}/>
                                                    <button  className="btn-del-yourbook"><FontAwesomeIcon icon={faTimes}/></button>
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                )
                            }
                        </div>
                        <div className="BookSlider">
                            <div className="book-slider-title">Yêu cầu bạn đang gửi</div>
                            {
                                this.state.tradedBooks.length === 0 ? (null) : (
                                    <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                                        {
                                            this.state.tradedBooks.map(book => (
                                                <div className="relative-pos">
                                                <Item 
                                                    categorieID={this.props.data_key} 
                                                    key={book._id} 
                                                    key_data={book._id} 
                                                    image={book.image} 
                                                    name={book.name} 
                                                    author={book.author}/>
                                                    <button  className="btn-del-youroffer"><FontAwesomeIcon icon={faTimes}/></button>
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="prompt">
                    <h1 className="message">Chưa có sách nào trao đổi</h1>
                </div>
            )
        }
    }
}
export default ViewBookExchange;