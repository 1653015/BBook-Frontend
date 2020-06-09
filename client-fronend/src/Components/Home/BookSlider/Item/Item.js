import React, { Component } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.reloadPage = this.reloadPage.bind(this);
    }
    reloadPage(){
        window.location.reload(false);
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
            <div className="item">
                <div className="avatar-item" onClick={this.reloadPage}>
                    <Link to={`/${this.props.categorieID}/${this.props.key_data}`} style={{width: '70%', color: 'yellow'}}>
                        <img className="avata-img" src={`https://bbook-backend.herokuapp.com/${this.props.image}`} width="100%" height="100%" alt={'BookTitle'}/>
                    </Link>
                </div>
                <div className="infor-item">
                    <div onClick={this.reloadPage}>
                        <Link to={`/${this.props.categorieID}/${this.props.key_data}`} style={{width: '70%', color: 'yellow'}}>
                            {this.props.name}
                        </Link>
                    </div>
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