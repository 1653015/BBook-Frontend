import React, { Component } from 'react';
import './InterestedBooksSlider.css';
import Carousel from "react-elastic-carousel";
import Item from '../../../Home/BookSlider/Item/Item';

const breakPoints = [
    { width: 1, itemsToShow: 5, itemsToScroll: 5},
];

class InterestedBooksSlider extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    // componentWillMount(){}
    componentDidMount(){}
    // componentWillUnmount(){}

    myArrow({ type, onClick}) {
        const pointer = type === 'PREV' ? '❮' : '❯';
        return (
            <button onClick={onClick} className="button-slider">
                {pointer}
            </button>
        );
    }

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        console.log(`Child: ${this.props.interested_books}`)
        return (
            <div className="BookSlider">
                <div className="book-slider-title">Sách {this.props.op} muốn được đổi</div>
                <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                    {
                        this.props.interested_books.map(book => (
                            <Item 
                                categorieID={this.props.data_key} 
                                key={book._id} 
                                key_data={book._id} 
                                image={book.image} 
                                name={book.name} 
                                author={book.author}/>
                        ))
                    }
                </Carousel>
            </div>
        );
    }
}

export default InterestedBooksSlider;