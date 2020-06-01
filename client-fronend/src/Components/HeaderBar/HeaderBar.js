import React, { Component } from 'react';
import './HeaderBar.css';
import {
    Link
} from "react-router-dom";
import Cookies from 'universal-cookie';

class HeaderBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
        };
        this.logout = this.logout.bind(this);
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    logout() {
        fetch('/user/logout',{method: 'POST'});
        this.state.cookies.remove('mUser');
        this.props.LoginLogout(false);
    }

    render() {
        if(this.props.isLogin || this.state.cookies.get('mUser')){
            return (
                <div className="header-bbook">
                <Link to='/' className="bbook-logo">BBOOK</Link>
                <div className="header-item">Mua Sách</div>
                <div className="header-item">Trao đổi</div>
                <div className="signin-signup-layout">
                    <div className="header-item">
                        {this.state.cookies.get('mUser')}
                    </div>
                    <div className="header-item">
                        <button type="button" onClick={this.logout} className="btn-logout">Logout</button>
                    </div>
                </div>
            </div>
            );
        }
        return (
            <div className="header-bbook">
                <Link to='/' className="bbook-logo">BBOOK</Link>
                <div className="signin-signup-layout">
                    <Link to='/signin'><div className="header-item">Đăng nhập</div></Link>
                    <Link to='/signup'><div className="header-item">Đăng kí</div></Link>
                </div>
            </div>
        );
    }
}

export default HeaderBar;