import React, { Component } from 'react';
import './ItemOffer.css';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

class ItemOffer extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies()
        };
        this.acceptOffer = this.acceptOffer.bind(this);
        this.declineOffer = this.declineOffer.bind(this);
    }
    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    acceptOffer(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/offer/accept/'+this.props.key_data,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.state.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.success){
                alert('Đã chấp nhận đề nghị');
                window.location.reload(false);
            }
        })
    }
    declineOffer(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/offer/decline/'+this.props.key_data,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.state.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.success){
                alert('Đã từ chối đề nghị');
                window.location.reload(false);
            }
        })
    }
    

    render() {
        return (
            <div className="relative-pos">
                <div className="ItemOffer">
                    <div className="avatar-ItemOffer">
                        <img className="avata-img" src={`https://bbook-backend.herokuapp.com/${this.props.image}`} width="100%" height="100%" alt={'BookTitle'}/>
                    </div>
                    <div className="infor-ItemOffer">
                        <div>
                            {this.props.name}
                        </div>
                        {
                            this.props.author ? (
                                <div className="author" >
                                    Chủ sách: {this.props.author}
                                </div>
                            ) : (null)
                        }
                    </div>
                </div>
                <button className="btn-del-offer" onClick={this.declineOffer}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
                <button className="btn-check-offer" onClick={this.acceptOffer}>
                    <FontAwesomeIcon icon={faCheck}/>
                </button>
            </div>
        );
    }
}

export default ItemOffer;