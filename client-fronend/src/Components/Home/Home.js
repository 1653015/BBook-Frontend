import React, { Component } from 'react';
import './Home.css';
import Cookies from 'universal-cookie';
import SideBar from './SideBar/SideBar';
import BookSlider from './BookSlider/BookSlider';
import ShoppingCart from './ShoppingCart/ShoppingCart'
import { Route } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            cookies: new Cookies()
        };
    }

    // componentWillMount(){}
    componentDidMount(){
        if(this.state.cookies.get('mUser')){
            this.setState({redirect: false});
        } else {
            this.setState({redirect: true});
        }
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    // logout() {
    //     fetch('/user/logout',{method: 'POST'});
    //     this.state.cookies.remove('mUser');
    //     this.props.LoginLogout(false);
    //     this.setState({redirect: true});
    // }

    render() {
        return (
            <div className="container">
                <Route exact path='/shoppingCart'>
                    <ShoppingCart/>
                </Route>
                <Route exact path='/'>
                    <SideBar/>
                    <div style={{width: '100%'}}>
                        <BookSlider/>
                        <BookSlider/>
                        <BookSlider/>
                    </div>
                </Route>
                <Route exact path="/product">
                    
                </Route>
            </div>
        );
    }
}

export default Home;