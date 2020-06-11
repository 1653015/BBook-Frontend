import React, { Component } from 'react';
import './BookExchangeDetail.css';
import { withRouter } from 'react-router-dom';
import InterestedBooksSlider from './InterestedBooksSlider/InterestedBooksSlider';
import PopupChangeBook from './PopupChangeBook/PopupChangeBook';


class BookExchangeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            traderq: {},
            interested: []
        };
        this.togglePopup = this.togglePopup.bind(this);
    }
    togglePopup() {
        this.setState({seen: !this.state.seen});
    }
    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/traderq/'+this.props.match.params.postId,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            },
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                this.setState({traderq: json.traderq});
                this.setState({interested: json.traderq.interested})
            }
        })
    }
    componentDidMount(){
        
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    
    render() {
        return (
            <div className='container'>
                <div className="BookExchangeDetail">
                    <div className="avatar">
                        <img src={`https://bbook-backend.herokuapp.com/${this.state.traderq.book&&this.state.traderq.book.image}`} width="80%" height="80%" alt={'BookTitle'}/>
                    </div>
                    <div className="book-infor">
                        <div className="book-name text-color-white">{this.state.traderq.book&&this.state.traderq.book.name}</div>
                        <div className="text-color-white author">Chủ sách: {this.state.traderq.op&&this.state.traderq.op.name}</div>
                        <div className="text-white margin-bottom-5">{this.state.traderq.message}</div>
                        <button className="btn-add-to-cart" onClick={this.togglePopup}>
                            Trao đổi
                        </button>
                        {
                            this.state.seen ? <PopupChangeBook 
                                                cookies={this.props.cookies} 
                                                toggle={this.togglePopup} 
                                                traderq={this.state.traderq}/> : null
                        }
                    </div>
                    <div className="listBook">
                        <InterestedBooksSlider op={this.state.traderq.op&&this.state.traderq.op.name} interested_books={this.state.interested}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BookExchangeDetail);