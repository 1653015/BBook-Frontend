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
                {
                    this.props.offerring.length === 0 ? (null) : (
                        <Carousel breakPoints={breakPoints} transitionMs={2000} disableArrowsOnEnd={false} renderArrow={this.myArrow}>
                            {
                                this.props.offerring.map(offerBook => (
                                    <ItemOffer 
                                        key={offerBook._id} 
                                        key_data={offerBook._id} 
                                        image={offerBook.offering.image} 
                                        name={offerBook.offering.name} 
                                        author={offerBook.from.name}/>
                                ))
                            }
                        </Carousel>
                    )
                }
            </div>
        );
    }
}

export default OffertoYourBook;