import React, { Component } from 'react';
import './ItemPost.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class ItemPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
        this.deleteTraderq = this.deleteTraderq.bind(this);
        this.deleteOffer = this.deleteOffer.bind(this);
    }
    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    deleteOffer(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/offer/'+this.props.key_data,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                this.props.onDeleteSuccess();
                window.location.reload(false);
            }
        })
        console.log('delete offer')
    }
    deleteTraderq(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/traderq/'+this.props.key_data,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                this.props.onDeleteSuccess();
                window.location.reload(false);
            }
        })
    }

    render() {
        return (
            <div className="relative-pos">
                <div className="ItemPost">
                    <div className="avatar-ItemPost">
                        {
                            this.props.isOffer ? (
                                <img className="avata-img" src={`https://bbook-backend.herokuapp.com/${this.props.image}`} width="100%" height="100%" alt={'BookTitle'}/>
                            ) : (
                                <Link to={`/exchange/viewoffer/information/${this.props.key_data}`} style={{width: '70%', color: 'yellow'}}>
                                    <img className="avata-img" src={`https://bbook-backend.herokuapp.com/${this.props.image}`} width="100%" height="100%" alt={'BookTitle'}/>
                                </Link>
                            )
                        }
                    </div>
                    <div className="infor-ItemPost">
                        <div>
                            {
                                this.props.isOffer ? (
                                    this.props.name
                                ) : (
                                    <Link to={`/exchange/viewoffer/information/${this.props.key_data}`} style={{width: '70%', color: 'yellow'}}>
                                        {this.props.name}
                                    </Link>
                                )
                            }
                        </div>
                        {
                            this.props.owner ? (
                                <div className="author" >
                                    Chủ sách: {this.props.owner}
                                </div>
                            ) : (null)
                        }
                    </div>
                </div>
                {
                    this.props.isOffer ? (
                        <button className="btn-del-yourbook" onClick={this.deleteOffer}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    ) : (
                        <button className="btn-del-yourbook" onClick={this.deleteTraderq}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    )
                }
            </div>
        );
    }
}

export default ItemPost;