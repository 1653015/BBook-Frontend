import React, { Component } from 'react';
import './Item.css';
import BookTitle from '../../../../img/booktitle.jpg'
import { Link } from 'react-router-dom';

class Item extends Component {
    // constructor(props){
        // super(props);
        // this.state = {};
    // }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        return (
            <div className="item">
                <div className="avatar-item">
                    <Link to={`/book-detail/${this.props.key_data}`} style={{width: '70%', color: 'yellow'}}>
                        <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                    </Link>
                </div>
                <div className="infor-item">
                    <Link to={`/${this.props.key_data}`} className="bookName">
                        <div>
                            [{this.props.name}]
                        </div>
                    </Link>
                    <div className="author" >
                        {this.props.author}
                    </div>
                    <div>
                        Giá: {this.props.price}
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;