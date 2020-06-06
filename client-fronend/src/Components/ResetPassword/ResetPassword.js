import React, { Component } from 'react';
import './ResetPassword.css';
import { withRouter } from 'react-router-dom';

class ResetPassword extends Component {
    // constructor(props){
        // super(props);
        // this.state = {};
    // }

    // componentWillMount(){}
    componentDidMount(){
        
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        return (
            <div className="container">
                <div className="text-white">
                    {this.props.match.params.tokenId}
                </div>
            </div>
        );
    }
}

export default withRouter(ResetPassword);