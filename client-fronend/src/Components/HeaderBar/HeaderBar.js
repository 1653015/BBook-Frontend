import React, { Component } from 'react';
import './HeaderBar.css'


class HeaderBar extends Component {
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
            <div className="header-bbook">
                <div className="bbook-logo">BBOOK</div>
                <div className="signin-signup-layout">
                    <div className="header-item">Đăng nhập</div>
                    <div className="header-item">Đăng kí</div>
                </div>
            </div>
        );
    }
}

export default HeaderBar;