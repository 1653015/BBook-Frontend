import React, { Component } from 'react';
import './ShoppingCartItem.css';

class ShoppingCartItem extends Component {
    // constructor(props){
        // super(props);
        // this.state = {};
    // }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        return (
            <div className="ShoppingCartItem">
                <div>{this.props.name}</div>
                <div>{this.props.quant}</div>
                <div>{this.props.price}</div>
            </div>
        );
    }
}

export default ShoppingCartItem;