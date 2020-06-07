import React, { Component } from 'react';
import './Home.css';
import Cookies from 'universal-cookie';
import SideBar from './SideBar/SideBar';
import BookSlider from './BookSlider/BookSlider';
import ShoppingCart from './ShoppingCart/ShoppingCart'
import { Route } from 'react-router-dom';
import BookDetail from './BookDetail/BookDetail';
import Shipping from './Shipping/Shipping';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            cookies: new Cookies()
        };
    }

    // componentWillMount(){}
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/category')
        .then(res => res.json())
        .then(json => {
            this.setState({categories: json.categories});
        })
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
                    <ShoppingCart cookies={this.state.cookies}/>
                </Route>
                <Route exact path="/:categorieID/:bookId">
                    <BookDetail cookies={this.state.cookies}/>
                </Route>
                <Route exact path="/shipping">
                    <Shipping cookies={this.state.cookies}/>
                </Route>
                <Route exact path='/'>
                    <SideBar categories={this.state.categories}/>
                    <div style={{width: '100%'}}>
                        {
                            this.state.categories.map(item => (
                                <BookSlider key={item._id} data_key={item._id} categories={item.name}/>
                            ))
                        }
                    </div>
                </Route>
            </div>
        );
    }
}

export default Home;