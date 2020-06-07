import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './Exchange.css';
import { Redirect } from 'react-router-dom';

class Exchange extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
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
        if(!this.state.cookies.get('isLogin')){
            return(<Redirect path='/'/>)
        }
        return (
            <div></div>
        );
    }
}

export default Exchange;