import React, { Component } from 'react';
import './BookExchangeDetail.css';
import { withRouter } from 'react-router-dom';
import InterestedBooksSlider from './InterestedBooksSlider/InterestedBooksSlider';

class BookExchangeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            traderq: {}
        };
    }
    
    // componentWillMount(){}
    componentDidMount(){
        console.log(this.props.match.params.postId)
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/traderq/'+this.props.match.params.postId,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            },
        })
        .then(res => res.json())
        .then(json => {
            if(!json.success) {

            } else {
                console.log(json.traderq)
                this.setState({traderq: json.traderq});
            }
        })
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
                        <div className="text-white">{this.state.traderq.message}</div>
                        <button className="btn-add-to-cart">
                            Trao đổi
                        </button>
                        {
                            // this.state.isSuccess ? (
                            //     <Alert variant="filled" className="alert" onClose={()=>{this.setState({isSuccess: !this.state.isSuccess})}} severity="success">Đã thêm sách vào giỏ hàng.
                            //     <Link to="/shoppingCart" className="link"> Chuyển đến giỏ hàng!
                            //     </Link>
                            //     </Alert>
                            // ) : (null)
                        }
                    </div>
                    <div className="listBook">
                        <InterestedBooksSlider op={this.state.traderq.op&&this.state.traderq.op.name} interestedBooks={this.state.traderq.interested}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BookExchangeDetail);