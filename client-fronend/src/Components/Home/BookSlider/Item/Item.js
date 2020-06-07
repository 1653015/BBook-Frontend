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
                    <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                        <img src={BookTitle} width="100%" height="100%" alt={'BookTitle'}/>
                    </Link>
                </div>
                <div className="infor-item">
                    <Link to="/product" style={{width: '70%', color: 'yellow'}}>
                        <div>
                            [Tên Sách] 1
                        </div>
                    </Link>
                    <div>
                        Tên tác giả
                    </div>
                    <div>
                        Giá
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;