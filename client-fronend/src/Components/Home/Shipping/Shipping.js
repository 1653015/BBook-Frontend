import React, { Component } from 'react';
import './Shipping.css';
import { Redirect } from 'react-router-dom';

class Shipping extends Component {
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
        if(!this.props.cookies.get('isLogin')){
            return(<Redirect to="/"/>)
        }

        return (
            <div className="Shipping">
                <h3 className="shipping-title">ĐỊA CHỈ GIAO HÀNG</h3>
                <div className="shipping-infor">
                    <h4 className="text-white">User Name</h4>
                    <div className="text-white">
                        Địa chỉ:
                    </div>
                    <div className="text-white">
                        Số điện thoại: 
                    </div>
                </div>
                <div className="btn-shipping-layout">
                    <button className="btn-shipping">Giao tới địa chỉ này</button>
                    <button className="btn-change-address">Sửa</button>
                </div>
            </div>
        );
    }
}

export default Shipping;