import React, { Component } from 'react';
import './ViewBookExchange.css';
import { Redirect, Link} from 'react-router-dom';
import Item from '../../Home/BookSlider/Item/Item';
import Cookies from 'universal-cookie';
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import Alert from '@material-ui/lab/Alert';
import ItemPost from '../ItemPost/ItemPost';


const breakPoints = [
    { width: 1, itemsToShow: 5, itemsToScroll: 5},
];

class ViewBookExchange extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
            uPosts: [],
            offerBooks: [],
            message: '',
            openMessage: false,
        };
    }

    onDeleteSuccess = () => {
        this.setState({openMessage: true});
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/traderq/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                this.setState({uPosts: json.posts});
            } 
        })
        
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/offer/sent', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                this.setState({offerBooks: json.offers});
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
    componentDidUpdate(){
        // fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/traderq/user', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'x-access-token': this.props.cookies.get('u_t')
        //     }
        // })
        // .then(res => res.json())
        // .then(json => {
        //     if (json.success) {
        //         this.setState({uPosts: json.posts});
        //     } 
        // })

        // fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/offer/sent', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'x-access-token': this.props.cookies.get('u_t')
        //     }
        // })
        // .then(res => res.json())
        // .then(json => {
        //     if (json.success) {
        //         this.setState({offerBooks: json.offers});
        //     }
        // })
    }

    render() {
        if(!this.state.cookies.get('isLogin')){
            return(<Redirect path='/'/>)
        }

        if (this.state.uPosts.length !== 0 || this.state.offerBooks !== 0) {
            return (
                <div className="container">
                    <div className="UserBookStorage">
                    <Link  className="post-trade-book"to="/exchange/create/book">Đăng ký đổi sách</Link>
                    {
                        this.state.openMessage ? (
                            <Alert 
                                variant="filled" 
                                className="alert" 
                                onClose={()=>{this.setState({openMessage: false})}} 
                                severity="success">
                                    Xóa thành công
                            </Alert>
                        ) : (null)
                            
                    }
                        <div className="BookSlider">
                            <div className="book-slider-title">Sách đổi của bạn</div>
                            {
                                
                                this.state.uPosts.length === 0 ? (null) : (
                                    <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                                        {
                                            this.state.uPosts.map(post => (
                                                <ItemPost
                                                    onDeleteSuccess={this.onDeleteSuccess}
                                                    cookies={this.state.cookies}
                                                    key={post._id}
                                                    key_data={post._id} 
                                                    image={post.book&&post.book.image} 
                                                    name={post.book&&post.book.name} 
                                                    owner={post.op.name}/>
                                            ))
                                        }
                                    </Carousel>
                                )
                            }
                        </div>
                        <div className="BookSlider">
                            <div className="book-slider-title">Yêu cầu bạn đang gửi</div>
                            {
                                this.state.offerBooks.length === 0 ? (null) : (
                                    <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                                        {
                                            this.state.offerBooks.map(book => (
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