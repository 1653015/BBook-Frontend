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
            totalPrice: 0
        };
        this.order = this.order.bind(this);
        this.cancelCheckout = this.cancelCheckout.bind(this);
        this.shipping = this.shipping.bind(this);
    }
    
    order() {
        if(this.props.cookies.get('isLogin')){
            fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/cart/validate',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({cart: this.props.cart})
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if(json.success){
                    this.setState({shipping: !this.state.shipping})
                }
            })
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
    componentDidMount(){
        let total = 0;
        this.props.cart&&this.props.cart.map(item => total += item.quant*item.price);
        this.setState({totalPrice: total});
    }
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
                    <div className="qua">
                        Tổng số sản phẩm: 13
                    </div>
                    <div className="prices-items">
                        Tạm tính: {this.state.totalPrice}
                    </div>
                    <div className="prices-total">
                        Thành tiền: {this.state.totalPrice}
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