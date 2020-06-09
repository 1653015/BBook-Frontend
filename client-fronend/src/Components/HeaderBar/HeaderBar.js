import React, { Component } from 'react';
import './HeaderBar.css';
import {
    Link
} from "react-router-dom";
import Cookies from 'universal-cookie';
import ShoppingCart from '../../img/shoppingCart.png'
import PopupChangePassword from './PopupChangePassword/PopupChangePassword'
class HeaderBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
            isOpen: false,
            searchBookName: ''
        };
        this.logout = this.logout.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    togglePopup() {
        this.setState({seen: !this.state.seen});
    }
    openDropdown() {
        this.setState({isOpen: true});
    }

    closeDropdown() {
        this.setState({isOpen: false});
    }

    logout() {
        
        if(this.state.cookies.get('m_inf_u').provider === 'googel'){
            const auth2 = window.gapi.auth2.getAuthInstance();
            if (auth2 !== undefined|| auth2 !== null) {
                auth2.signOut().then(() => {
                        auth2.disconnect().then(this.props.onLogoutSuccess);
                    }
                )
            }
        }
        this.state.cookies.remove('isLogin');
        this.state.cookies.remove('u_t');
        this.state.cookies.remove('m_inf_u');
        this.props.LoginLogout(false);
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.searchBookByName();
        }
    }

    searchBookByName = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/book/title/'+this.state.searchBookName)
        .then(res => res.json())
        .then(json => {
            if(json.success){
                console.log(json.books)
            }
        })
    }

    updateInputValue = (evt) => {
        this.setState({searchBookName: evt.target.value})
    }

    render() {
        if(this.state.cookies.get('isLogin')){
            return (
                <div className="header-bbook">
                    <Link to='/' className="bbook-logo">BBOOK</Link>
                    <Link to='/exchange' className="header-item cursor-pointer">Trao đổi</Link>
                    <Link to='/exchange/create/yourbook' className="header-item cursor-pointer">Đăng ký đổi sách </Link>
                    <Link to='/kho' className="header-item cursor-pointer">Sách của bạn</Link>
                    <div className="signin-signup-layout">
                    <div className="flexbox">
                        <div className="search">
                            <div>
                                <input value={this.state.searchBookName} onChange={this.updateInputValue} onKeyDown={this.handleKeyDown} type="text" placeholder="       Search . . ." required/>
                            </div>
                        </div>
                        </div>
                            <div className="header-item dropdown">
                                <span className="dropbtn">{this.state.cookies.get('m_inf_u')&&this.state.cookies.get('m_inf_u').name}</span>
                                <div className="dropdown-content">
                                    <div className="link cursor-pointer"onClick={this.togglePopup}>
                                        Đổi mật khẩu
                                    </div>
                                    <div className="link"onClick={this.logout}>Đăng xuất</div>
                                </div>
                            </div>        
                        <div className="header-item">
                            <Link to="/shoppingCart">
                                <img src={ShoppingCart} width="30" height="30" alt={'shoppingCart'}/>
                            </Link>
                        </div>
                    </div>
                    {
                        this.state.seen ? <PopupChangePassword cookies={this.state.cookies} toggle={this.togglePopup} /> : null
                    }
                </div>
            );
        }
        return (
            <div className="header-bbook">
                <Link to='/' className="bbook-logo">BBOOK</Link>
                <div className="signin-signup-layout">
                    <Link to='/signin'><div className="header-item">Đăng nhập</div></Link>
                    <Link to='/signup'><div className="header-item">Đăng kí</div></Link>
                    <div className="header-item">
                        <Link to="/shoppingCart">
                            <img src={ShoppingCart} width="30" height="30" alt={'shoppingCart'}/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBar;