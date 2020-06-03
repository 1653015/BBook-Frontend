import React, { Component } from 'react';
import './Calculate.css';

class Calculate extends Component {
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
                    <button className="btn-order">Tiến hành đặt hàng</button>
                </div>
            </div>
        );
    }
}

export default Calculate;