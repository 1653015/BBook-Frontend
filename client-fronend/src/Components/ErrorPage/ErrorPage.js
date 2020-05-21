import React, { Component } from 'react';
import './ErrorPage.css';
import {
    Link
} from "react-router-dom";

class ErrorPage extends Component {
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
            <div className="container">
                <div className="sign-in-up-form">
                    404 PAGE NOT FOUND
                    <div>
                        <Link to="/home"><div className="header-item">RETURN</div></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorPage;