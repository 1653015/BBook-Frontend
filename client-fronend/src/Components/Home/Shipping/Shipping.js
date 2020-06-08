import React, { Component } from 'react';
import './Shipping.css';
import { Redirect } from 'react-router-dom';
import UpdateShippingInfor from './UpdateShippingInfor/UpdateShippingInfor'

class Shipping extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        };
        this.openUpdateInf = this.openUpdateInf.bind(this);
        this.ship = this.ship.bind(this);
    }

    // componentWillMount(){}
    // componentDidMount(){}
    componentWillUnmount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/cart/return',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            },
            body: JSON.stringify({cart: this.props.cookies.get('shoppingCart')})
        })
    }

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    ship(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/transaction',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            },
            body: JSON.stringify({
                items: this.props.cookies.get('shoppingCart'),
                total:this.props.cookies.get('total'),
                destination: this.props.cookies.get('m_inf_u').address,
                numbers: this.props.cookies.get('m_inf_u').phone
            })
        })
        .then(res => res.json())
        .then(json => {
            if(json.success){
                alert('Đang vận chuyển')
            }
        })
    }

    openUpdateInf(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        if(!this.props.cookies.get('isLogin')){
            return(<Redirect to="/"/>)
        }

        return (
            <div className='container'>
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
                        <button onClick={this.ship} className="btn-shipping">Giao tới địa chỉ này</button>
                        <button onClick={this.openUpdateInf} className="btn-change-address">Sửa</button>
                    </div>
                    {
                        this.state.isOpen ? (<UpdateShippingInfor closeUpdate={this.openUpdateInf} cookies={this.props.cookies}/>) : (null)
                    }
                </div>
            </div>
        );
    }
}

export default Shipping;