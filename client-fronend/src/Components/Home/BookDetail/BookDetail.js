import React, { Component } from 'react';
import './BookDetail.css';
import BookTitle from '../../../img/booktitle.jpg'

class BookDetail extends Component {
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
            <div className="BookDetail">
                <div className="avatar">
                    <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                </div>
                <div className="book-infor">
                    <div className="book-name text-color-white">TÔI LÀ SỐ BỐN</div>
                    <div className="text-color-white">Tác giả: PITTACUS LORE</div>
                    <div className="text-color-white">Giá: 100.000đ</div>
                    <button className="btn-add-to-cart">Thêm vào giỏ hàng</button>
                </div>
            </div>
        );
    }
}

export default BookDetail;