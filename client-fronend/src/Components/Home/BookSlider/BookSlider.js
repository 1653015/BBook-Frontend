import React, { Component } from 'react';
import './BookSlider.css';
import Carousel from "react-elastic-carousel";
import BookTitle from '../../../img/booktitle.jpg'
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
                <div className="book-slider-title">{this.props.categories.toUpperCase()}</div>
                <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 1
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 2
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 3
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 4
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 5
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 6
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 7
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 8
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 9
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="avatar-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                            </Link>
                        </div>
                        <div className="infor-item">
                            <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                                <div>
                                    [Tên Sách] 10
                                </div>
                            </Link>
                            <div>
                                Tên tác giả
                            </div>
                            <div>
                                Giá
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default BookSlider;