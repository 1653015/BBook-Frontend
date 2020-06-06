import React, { Component } from 'react';
import './Calculate.css';
import { Redirect } from 'react-router-dom';

class Calculate extends Component {
    constructor(props){
        super(props);
        this.state = {
            success: false,
            redirect: false,
            shipping: false,
        };
        this.order = this.order.bind(this);
        this.cancelCheckout = this.cancelCheckout.bind(this);
        this.shipping = this.shipping.bind(this);
    }
    
    order() {
        if(this.props.cookies.get('isLogin')){
            this.setState({success: true});
        } else {
            this.setState({redirect: true});
        }
    }

    
    cancelCheckout() {
        this.setState({success: false});
    }

    shipping() {
        this.setState({shipping: true});
    }
    
    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}
    // componentWillReceiveProps(){}

    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        if(this.state.shipping){
            return(<Redirect to='/shipping'/>);
        }

        if(this.state.success){
            return(
                <div className="Calculate">
                    <div className="order">
                        <button onClick={this.cancelCheckout} className="btn-order">Trở lại</button>
                    </div>
                    <div className="order">
                        <button className="btn-order" onClick={this.shipping}>Xác nhận</button>
                    </div>
                </div>
            );
        }
        if(this.state.redirect){
            return(<Redirect to='/signin'/>);
        }
        return (
            <div className="Calculate">
                <div className="calculated-money">
                    <div className="prices-items">
                        Tạm tính
                    </div>
                    <div className="prices-total">
                        Thành tiền
                    </div>
                </div>
                <div className="order">
                    <button className="btn-order" onClick={this.order}>Tiến hành đặt hàng</button>
                </div>
            </div>
        );
    }
}

export default Calculate;