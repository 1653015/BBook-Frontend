import React, { Component } from 'react';
import './ShoppingCartItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'
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
                <div><input type="number" className="input" defaultValue={this.props.quant}/></div>
                <div>{this.props.price}</div>
                <div>
                    <button className="btn-del"><FontAwesomeIcon icon={faTimes}/></button>
                </div>
            </div>
        );
    }
}

export default ShoppingCartItem;