import React, { Component } from 'react';
import './ShoppingCart.css';
import Calculate from './Calculate/Calculate';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: this.props.cookies.get('shoppingCart'),
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
        return (
            <div className="ShoppingCart">
                <h3 className="shopping-cart-title">GIỎ HÀNG</h3>
                <div className="list-product">
                    {
                        this.state.cart && this.state.cart.map(item => (
                            <ShoppingCartItem name={item.name} quant={item.quant} price={item.price}/>
                        ))
                    }
                </div>
                <Calculate cookies={this.props.cookies}/>
            </div>
        );
    }
}

export default ShoppingCart;