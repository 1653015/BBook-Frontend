import React, { Component } from 'react';
import './BookSlider.css';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import { Link } from 'react-router-dom';

const breakPoints = [
    { width: 1, itemsToShow: 5, itemsToScroll: 5},
];

class BookSlider extends Component {
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
    myArrow({ type, onClick}) {
        console.log(type);
        const pointer = type === 'PREV' ? '❮' : '❯';
        return (
            <button onClick={onClick} className="button-slider">
                {pointer}
            </button>
        );
    }

    render() {
        return (
            <div className="BookSlider">
                <div className="book-slider-title">THỂ LOẠI</div>
                <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>
                    <Link to="/product" style={{width: '70%'}}>
                        <Item>
                            Ảnh
                            <div>
                                Tên sách
                            </div>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </Item>
                    </Link>                    
                </Carousel>
            </div>
        );
    }
}

export default BookSlider;