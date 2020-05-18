import React, { Component } from 'react';
import './HeaderBar.css';
import {
    Link
  } from "react-router-dom";


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
                <Link to="/" className="bbook-logo">BBOOK</Link>
                <div className="signin-signup-layout">
                    <Link to="/signin"><div className="header-item">Đăng nhập</div></Link>
                    <Link to="/signup"><div className="header-item">Đăng kí</div></Link>
                </div>
            </div>
        );
    }
}

export default HeaderBar;