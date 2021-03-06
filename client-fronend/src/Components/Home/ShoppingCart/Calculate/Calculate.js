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
            totalPrice: 0,
            totalItem: 0,
        };
        this.order = this.order.bind(this);
        this.cancelCheckout = this.cancelCheckout.bind(this);
        this.shipping = this.shipping.bind(this);
    }
    
    order() {
        if(this.props.cookies.get('isLogin')&&this.props.cart&&this.props.cart.length !== 0){
            fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/cart/validate',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': this.props.cookies.get('u_t')
                },
                body: JSON.stringify({cart: this.props.cart})
            })
            .then(res => res.json())
            .then(json => {
                let cart=[];
                json.cart.items.map(item => cart.push({
                    id: item.book._id, 
                    image: item.book.image, 
                    name: item.book.name, 
                    price: item.book.price, 
                    quant: item.quant
                }));
                this.setState({success: !this.state.success});
                this.props.cookies.set('shoppingCart', cart);
                this.props.cookies.set('total', json.cart.total);
                
            })
        } else {
            this.setState({redirect: true});
        }
    }

    
    cancelCheckout() {
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/cart/return',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            },
            body: JSON.stringify({cart: this.props.cart})
        })
        this.setState({success: false});
    }

    shipping() {
        this.setState({shipping: true});
    }
    
    // componentWillMount(){}
    componentDidMount(){
        let totalPrice = 0;
        let totalItem = 0;
        this.props.cart&&this.props.cart.map(item => totalPrice += item.quant*item.price);
        this.props.cart&&this.props.cart.map(item => totalItem += item.quant*1);
        this.setState({totalPrice});
        this.setState({totalItem});
    }
    componentWillUnmount(){
        if(!this.state.shipping){
            fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/cart/return',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': this.props.cookies.get('u_t')
                },
                body: JSON.stringify({cart: this.props.cart})
            })
        }
    }
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
                        Tổng số sản phẩm: {this.state.totalItem}
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