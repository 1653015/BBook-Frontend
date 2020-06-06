import React, { Component } from 'react';
import './PopupForgotPassword.css';
import {Formik} from 'formik'
import * as Yup from 'yup'

class PopupForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
        };
        this.forgotPassword = this.forgotPassword.bind(this);
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    handleClick = () => {
        this.props.toggle();
    };

    
    forgotPassword(values, actions){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/auth/forgot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: values.email})
        })
        .then(res => res.json())
        .then(json => {
            if(!json.success){

            } else {

                this.setState({errorMessage: json.message});
            }
        })
    }

    render() {
        return (
            <div className="PopupForgotPassword" >
                <div className="PopupForgotPassword-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <Formik
                    initialValues={{email: ''}}
                    onSubmit={(values, actions) => {
                        this.forgotPassword(values, actions);
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .required('Email is empty')
                    })}>
                        {
                            props => (
                                <div>
                                    <h2>Quên mật khẩu?</h2>
                                    <div>Vui lòng nhập email đăng nhập để lấy lại mật khẩu</div>
                                    <form onSubmit={props.handleSubmit}>
                                        <input className="input-email"
                                            type="text"
                                            onChange={props.handleChange}
                                            value={props.values.email}
                                            name="email"
                                            placeholder="Hãy nhập email của bạn"
                                        />
                                        <div className="error-message">{this.state.errorMessage}</div>
                                        <input type="submit" disabled={props.isSubmitting} value="Gửi"/>
                                    </form>
                                </div>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default PopupForgotPassword;