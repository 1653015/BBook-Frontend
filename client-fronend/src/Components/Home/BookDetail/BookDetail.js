import React, { Component } from 'react';
import './BookDetail.css';
import Alert from '@material-ui/lab/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
import BookSlider  from '../BookSlider/BookSlider'
import {
    Link
} from "react-router-dom";
class BookDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSuccess: false,
            element: 1,
            book: {}
        };
        this.expel = this.expel.bind(this);
        this.add = this.add.bind(this);
        this.addToShoppingCart = this.addToShoppingCart.bind(this);
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
    addToShoppingCart() {
        const {image, name, price}= this.state.book;
        if(!this.props.cookies.get('shoppingCart')){
            let shoppingCart = [{id: this.props.match.params.bookId, 
                image: image,
                name: name,
                price: price, 
                quant: this.state.element}];
            this.props.cookies.set('shoppingCart', shoppingCart);
        } else {
            let shoppingCart = this.props.cookies.get('shoppingCart');
            let included = false;
            let indexOf;
            shoppingCart.map((item, index) => {
                if(item.id === this.props.match.params.bookId){
                    included = true;
                    indexOf = index;
                }
                return true;
            });
            if(included){
                shoppingCart[indexOf].quant += this.state.element;
            } else {
                shoppingCart.push({id: this.props.match.params.bookId,
                    image: image,
                    name: name, 
                    price: price, 
                    quant: this.state.element});
            }
            this.props.cookies.set('shoppingCart', shoppingCart);
        }
        this.setState({isSuccess: !this.state.isSuccess});
        
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
                <div className="BookDetail">
                    <div className="avatar">
                        <img src={`https://bbook-backend.herokuapp.com/${this.state.book.image}`} width="80%" height="80%" alt={'BookTitle'}/>
                    </div>
                    <div className="book-infor">
                        <div className="book-name text-color-white">{this.state.book.name}</div>
                        <div className="text-color-white author">Tác giả: {this.state.book.author}</div>
                        <div className="text-color-white">Giá: {this.state.book.price}đ</div>
                        <div className="text-color-white"> Số lượng
                        <div className='groupInput'>
                            <button className="btn-expel" onClick={this.expel}>-</button>
                            <input value={this.state.element} onChange={()=>{}}/>
                            <button className="btn-add" onClick={this.add}>+</button>
                        </div></div>
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

export default withRouter(BookDetail);