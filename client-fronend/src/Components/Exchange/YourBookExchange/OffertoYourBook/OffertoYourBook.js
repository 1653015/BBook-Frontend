import React, { Component } from 'react';
import './OffertoYourBook.css';
import Carousel from "react-elastic-carousel";
import ItemOffer from '../ItemOffer/ItemOffer';
import Alert from '@material-ui/lab/Alert';
const breakPoints = [
    { width: 1, itemsToShow: 5, itemsToScroll: 5},
];

class OffertoYourBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            hover:false,
            openMessage:false,
        };
    }

    onDeleteSuccess = () => {
        this.setState({openMessage: true});
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
        return (
            <div className="BookSlider">
                <div className="book-slider-title">Yêu cầu gửi tới bạn</div>
                {
                        this.state.openMessage ? (
                            <Alert 
                                variant="filled" 
                                className="alert" 
                                onClose={()=>{this.setState({openMessage: false})}} 
                                severity="success">
                                    Xóa thành công
                            </Alert>
                        ) : (null)
                            
                    }
                <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                    {
                        this.props.interested_books.map(book => (
                            <ItemOffer 
                                onDeleteSuccess={this.onDeleteSuccess}
                                categorieID={book.categories[0]} 
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

export default OffertoYourBook;