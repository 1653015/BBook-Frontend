import React, { Component } from 'react';
import './HeaderBar.css';
import {
    Link
} from "react-router-dom";
import Cookies from 'universal-cookie';
import ShoppingCart from '../../img/shoppingCart.png'

class HeaderBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
            isOpen: false
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

    openDropdown() {
        this.setState({isOpen: true});
    }

    closeDropdown() {
        this.setState({isOpen: false});
    }

    logout() {
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/auth/signout',{method: 'POST'});
        // const auth2 = window.gapi.auth2.getAuthInstance();
        // if (auth2 != undefined|| auth2 != null) {
        //     auth2.signOut().then(() => {
        //             auth2.disconnect().then(this.props.onLogoutSuccess);
        //             console.log('logout');
        //         }
        //     )
        // }
        this.state.cookies.remove('isLogin');
        this.props.LoginLogout(false);
    }

    render() {
        if(this.state.cookies.get('isLogin')){
            return (
                <div className="header-bbook">
                    <Link to='/' className="bbook-logo">BBOOK</Link>
                    <div className="header-item">Trao đổi</div>
                    <div className="signin-signup-layout">
                    <div className="flexbox">
                        <div className="search">
                            <div>
                            <input type="text" placeholder="       Search . . ." required/>
                            </div>
                        </div>
                        </div>
                        <div onMouseLeave={() => this.closeDropdown()}>
                            <div className="header-item" onMouseEnter={() => this.openDropdown()} >
                                User Name
                            </div>
                            {
                                this.state.isOpen ? (
                                    <ul class='sub_menu'>
                                        <li class='submenu-arrow-wrap'>
                                        </li>      
                                        <li class="menu-item ">Trang cá nhân
                                        </li>
                                        <li class='submenu-arrow-wrap'>
                                        </li>      
                                        <li class="menu-item "><button type="button" onClick={this.logout} className="btn-logout">Logout</button>
                                        </li>
                                    
                                    </ul>
                                ) : ( null )
                            }
                        </div>
                        <div className="header-item">
                            <Link to="/shoppingCart">
                                <img src={ShoppingCart} width="30" height="30" alt={'shoppingCart'}/>
                            </Link>
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