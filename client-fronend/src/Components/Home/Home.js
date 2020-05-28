import React, { Component } from 'react';
import './Home.css';
import {Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';

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
        if(!this.state.cookies.get('mUser') || this.state.redirect) {
            return (<Redirect to={'/signin'} />);
        }

        // if(this.props.isLogin) {
        //     return (<Redirect to={'/signin'} />);
        // }

        return (
            <div className="container">
                
            </div>
        );
    }
}

export default Home;