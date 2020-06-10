import React, { Component } from 'react';
import './BookExchangeDetail.css';
import { withRouter } from 'react-router-dom';
import InterestedBooksSlider from './InterestedBooksSlider/InterestedBooksSlider';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

class BookExchangeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            traderq: {},
            interested: []
        };
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
        console.log(`Parent: ${this.state.interested}`)
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
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                <Button variant="contained" color="primary" {...bindTrigger(popupState)} >
                                    Trao đổi
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Cake</MenuItem>
                                    <MenuItem onClick={popupState.close}>Death</MenuItem>
                                </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
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