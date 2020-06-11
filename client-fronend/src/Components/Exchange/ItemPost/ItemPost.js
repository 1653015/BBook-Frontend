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
    }
    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
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
            }
        })
    }

    render() {
        return (
            <div className="relative-pos">
                <div className="ItemPost">
                    <div className="avatar-ItemPost">
                        <Link to={`/exchange/viewoffer/information/${this.props.key_data}`} style={{width: '70%', color: 'yellow'}}>
                            <img className="avata-img" src={`https://bbook-backend.herokuapp.com/${this.props.image}`} width="100%" height="100%" alt={'BookTitle'}/>
                        </Link>
                    </div>
                    <div className="infor-ItemPost">
                        <div>
                            <Link to={`/exchange/viewoffer/information/${this.props.key_data}`} style={{width: '70%', color: 'yellow'}}>
                                {this.props.name}
                            </Link>
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
                <button className="btn-del-yourbook" onClick={this.deleteTraderq}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </div>
        );
    }
}

export default ItemPost;