import React, { Component } from 'react';
import './ShoppingCartItem.css';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'
class ShoppingCartItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
        };
        this.updateItemQuant = this.updateItemQuant.bind(this);
        this.deleteBookfromCart = this.deleteBookfromCart.bind(this);
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    updateItemQuant(e){
        const quant = e.target.value;
        if(quant > 0){
            let cart = this.state.cookies.get('shoppingCart');
            for(let i=0;i<cart.length;i++){
                if(cart[i].id === this.props.book.id){
                    cart[i].quant = quant;
                    break;
                }
            }
            this.state.cookies.set('shoppingCart', cart);
            window.location.reload(false);
        }
    }
    deleteBookfromCart(){
        let cart = this.state.cookies.get('shoppingCart');
        for(let i=0;i<cart.length;i++){
            if(cart[i].id === this.props.book.id){
                cart.splice(i, 1);
                break;
            }
        }
        this.state.cookies.set('shoppingCart', cart);
        window.location.reload(false);
    }
    render() {
        return (
            <div className="ShoppingCartItem">
                <div className="img"><img width='100%' height='100%' src={`https://bbook-backend.herokuapp.com/`+this.props.book.image} alt={'booktitle'}/></div>
                <div className="nameBook">{this.props.book.name}</div>
                <div className="comboPriceQual">
                <div className="bold">Số lượng: <input onChange={this.updateItemQuant} min="1" type="number" className="input" defaultValue={this.props.book.quant}/></div>
                <div className="bold">Đơn giá: <span className="red">{this.props.book.price} đ</span> </div>
                </div>
                <div>
                    <button onClick={this.deleteBookfromCart} className="btn-del"><FontAwesomeIcon icon={faTimes}/></button>
                </div>
            </div>
        );
    }
}

export default ShoppingCartItem;