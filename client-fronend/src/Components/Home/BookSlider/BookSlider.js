import React, { Component } from 'react';
import './BookSlider.css';
import Carousel from "react-elastic-carousel";
import Item from './Item/Item'

const breakPoints = [
    { width: 1, itemsToShow: 5, itemsToScroll: 5},
];

class BookSlider extends Component {
    // constructor(props){
        // super(props);
        // this.state = {};
    // }

    // componentWillMount(){}
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/book/category/' + this.props.data_key)
    }
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
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Carousel>
            </div>
        );
    }
}

export default BookSlider;