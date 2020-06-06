import React, { Component } from 'react';
import './ShoppingCart.css';
import Calculate from './Calculate/Calculate';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    componentDidUpdate(){}

    render() {
        return (
            <div className="ShoppingCart">
                <h3 className="shopping-cart-title">GIỎ HÀNG</h3>
                <div className="list-product">
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                </div>
                <Calculate cookies={this.props.cookies}/>
            </div>
        );
    }
}

export default ShoppingCart;