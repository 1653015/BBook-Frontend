import React, { Component } from 'react';
import './LandingPage.css';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            cookies: new Cookies()
        };
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        if(this.state.redirect) {
            return (<Redirect to='/home'/>)
        }

        if(this.state.cookies.get('userToken')){
            return (<Redirect to='/home'/>)
        }

        return (
            <div className="container">
                THIS IS LANDINGPAGE
            </div>
        );
    }
}

export default LandingPage;