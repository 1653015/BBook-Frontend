import React, { Component } from 'react';
import './ItemPost.css';
import { Link } from 'react-router-dom';

class ItemPost extends Component {
    constructor(props){
        super(props);
        this.state = {};
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
        );
    }
}

export default ItemPost;