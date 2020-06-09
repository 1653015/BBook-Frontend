import React, { Component } from 'react';
import './BookExchangeDetail.css';
import { Redirect, Link} from 'react-router-dom';
import ItemExchange from '../ItemExchange/ItemExchange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

class BookExchangeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSuccess: false,
            element: 1,
            book: {}
        };
        this.expel = this.expel.bind(this);
        this.add = this.add.bind(this);
    }
    expel(){
        if(this.state.element-1 > 0){
            this.setState({
                element: this.state.element-1
            });
        }
    }
    add(){
        this.setState({
            element: this.state.element+1
        });
    }
    
    // componentWillMount(){}
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/book/title/'+this.props.match.params.bookId)
        .then(res => res.json())
        .then(json => {
            if(!json.success) {
                
            } else {
                this.setState({book: json.book});
            }
        })
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    
    render() {
        return (
            <div className='container'>
                <div className="BookExchangeDetail">
                    <div className="avatar">
                        <img src={`https://bbook-backend.herokuapp.com/${this.state.book.image}`} width="80%" height="80%" alt={'BookTitle'}/>
                    </div>
                    <div className="book-infor">
                        <div className="book-name text-color-white">{this.state.book.name}</div>
                        <div className="text-color-white author">Chủ sách: {this.state.book.author}</div>
                        <button className="btn-add-to-cart" onClick={this.addToShoppingCart}>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            Chọn mua
                        </button>
                        {
                            this.state.isSuccess ? (
                                <Alert variant="filled" className="alert" onClose={()=>{this.setState({isSuccess: !this.state.isSuccess})}} severity="success">Đã thêm sách vào giỏ hàng.
                                <Link to="/shoppingCart" className="link"> Chuyển đến giỏ hàng!
                                </Link>
                                </Alert>
                            ) : (null)
                        }
                    </div>
                    <div className="listBook">
                    <BookSlider data_key={this.props.match.params.categorieID} categories={"Sách cùng thể loại"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BookExchangeDetail);