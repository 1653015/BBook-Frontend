import React, { Component } from 'react';
import './BookDetail.css';
import BookTitle from '../../../img/booktitle.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
class BookDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            element: 1,
        };
    }
    minus(){
        let temp = this.state.element-1;
        this.setState({
            element: temp
        });
    }
    plus(){
        let temp = this.state.element+1;
        this.setState({
            element:temp
        });
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
            <div className="BookDetail">
                <div className="avatar">
                    <img src={BookTitle} width="80%" height="80%" alt={'BookTitle'}/>
                </div>
                <div className="book-infor">
                    <div className="book-name text-color-white">TÔI LÀ SỐ BỐN</div>
                    <div className="text-color-white">Tác giả: PITTACUS LORE</div>
                    <div className="text-color-white">Giá: 100.000đ</div>
                    <div className='groupInput'>
                        <button onClick={this.minus}>-</button>
                        <input type= {Number} value={this.state.element}/>
                        <button onClick={this.plus}>+</button>
                    </div>
                    <button className="btn-add-to-cart"><FontAwesomeIcon icon={faShoppingCart}/>      Chọn mua</button>
                </div>
            </div>
        );
    }
}

export default BookDetail;