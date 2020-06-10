import React, { Component } from 'react';
import './InterestedBooksSlider.css';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 5, itemsToScroll: 5},
];

class InterestedBooksSlider extends Component {
    // constructor(props){
      // super(props);
      // this.state = {};
    // }

    myArrow({ type, onClick}) {
        const pointer = type === 'PREV' ? '❮' : '❯';
        return (
            <button onClick={onClick} className="button-slider">
                {pointer}
            </button>
        );
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
            <div className="BookSlider">
                <div className="book-slider-title">Sách {this.props.op} muốn được đổi</div>
                <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                    {
                        this.props.interestedBooks.map(book => (
                            <div></div>
                        ))
                    }
                </Carousel>
            </div>
        );
    }
}

export default InterestedBooksSlider;