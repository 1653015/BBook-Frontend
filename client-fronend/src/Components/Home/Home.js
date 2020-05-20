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
        this.logout = this.logout.bind(this);
    }

    // componentWillMount(){}
    componentDidMount(){
        if(this.state.cookies.get('userToken')){
        } else {
            this.setState({redirect: true});
        }
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    logout(){
        this.state.cookies.set('userToken', '');
        this.state.cookies.remove('userToken', {path: '/'});
        this.setState({redirect: true});
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to={'/signin'} />);
        }

        return (
            <div style={{color: "white", textAlign: "center", position: "absolute", top: "68px", width: "100%"}}>
                <button type="button" onClick={this.logout} className="btn-logout">LOG OUT</button>
            </div>
        );
    }
}

export default Home;