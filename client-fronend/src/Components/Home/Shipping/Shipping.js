import React, { Component } from 'react';
import './Shipping.css';
import { Redirect } from 'react-router-dom';

class Shipping extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        };
        this.openUpdateInf = this.openUpdateInf.bind(this);
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    openUpdateInf(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        if(!this.props.cookies.get('isLogin')){
            return(<Redirect to="/"/>)
        }

        return (
            <div classname='container'>
                <div className="Shipping">
                    <h3 className="shipping-title">ĐỊA CHỈ GIAO HÀNG</h3>
                    <div className="shipping-infor">
                        <h4 className="text-white">{this.props.cookies.get('m_inf_u').name}</h4>
                        <div className="text-white">
                            Địa chỉ: {this.props.cookies.get('m_inf_u').address}
                        </div>
                        <div className="text-white">
                            Số điện thoại: {this.props.cookies.get('m_inf_u').phone}
                        </div>
                    </div>
                    <div className="btn-shipping-layout">
                        <button className="btn-shipping">Giao tới địa chỉ này</button>
                        <button onClick={this.openUpdateInf} className="btn-change-address">Sửa</button>
                    </div>
                    {
                        this.state.isOpen ? (<div>asdfasdfsdf</div>) : (null)
                    }
                </div>
            </div>
        );
    }
}

export default Shipping;