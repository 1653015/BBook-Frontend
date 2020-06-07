import React, { Component } from 'react';
import {Formik} from 'formik'
import * as Yup from 'yup'
import './SignIn.css';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie'
import GoogleLogin from 'react-google-login';
import PopupForgotPassword from './PopupForgotPassword/PopupForgotPassword'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
            redirect: false,
            cookies: new Cookies(),
            seen: false
        };
        this.login = this.login.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    togglePopup() {
        this.setState({seen: !this.state.seen});
    }

    login(values, actions){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/auth/email',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: values.email, password: values.password})
        })
        .then(res => {
            if(res.status === 400) {
                res.text().then(text => this.setState({errorMessage: text}));
                actions.setSubmitting(false);
            } else if (res.status === 200) {
                this.state.cookies.set('isLogin', 'login', {maxAge: 36000000, httpOnly: false});
                this.props.LoginLogout(true);
                this.setState({redirect: true});
            } else {
                this.setState({errorMessage: 'Lỗi không xác định!!!'});
                actions.setSubmitting(false);
            }
        })
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to='/'/>)
        }

        if(this.state.cookies.get('isLogin')) {
            return (<Redirect to='/'/>)
        }

        return (
            <div className="SignIn">
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values, actions) => {
                        this.login(values, actions);
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .required('Email is empty'),
                        password: Yup.string()
                            .min(8, 'To short!!!')
                            .max(50, 'To long!!!')
                            .required('Password is empty'),
                    })}
                    >
                        {
                            props => (
                                <form onSubmit={props.handleSubmit} className="signin-form">
                                    <h1 style={{textAlign: "center"}} className="font-white">Đăng Nhập</h1>
                                    <div className="form-item">
                                        <div className="form-item-header">
                                            <div style={{textAlign: "center"}} className="font-white" >Email (Tên Đăng Nhập)</div>
                                            {props.touched.email && props.errors.email? (
                                                <div className="invalid-message">{props.errors.email}</div>
                                            ) : null}
                                        </div>
                                        <input className="form-input"
                                            type="text"
                                            onChange={props.handleChange}
                                            value={props.values.email}
                                            name="email"
                                            placeholder="Hãy nhập email của bạn"
                                        />
                                    </div>
                                    <div className="form-item">
                                        <div className="form-item-header">
                                            <div className="font-white">Mật Khẩu</div>
                                            {props.touched.password && props.errors.password? (
                                                <div className="invalid-message">{props.errors.password}</div>
                                            ) : null}
                                        </div>
                                        <input className="form-input"
                                            type="password"
                                            onChange={props.handleChange}
                                            value={props.values.password}
                                            name="password"
                                            placeholder="Hãy nhập mật khẩu của bạn"
                                        />
                                    </div>
                                    <div className="text-white" style={{cursor: 'pointer'}} onClick={this.togglePopup}>Quên mật khẩu</div>
                                    <div className="error-message">{this.state.errorMessage}</div>
                                    <input type="submit" disabled={props.isSubmitting} value="Đăng Nhập"/>
                                    <GoogleLogin
                                        clientId="639654572878-40oqbl8t2cj3dvjv8vj9othe1he9oepv.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                        buttonText="LOGIN WITH GOOGLE"
                                        onSuccess={() => {
                                            this.state.cookies.set('isLogin', 'login');
                                            this.props.LoginLogout(true);
                                            this.setState({redirect: true});
                                            }
                                        }
                                        onFailure={(res) => {console.log(res)}}
                                    />
                                </form>
                            )
                        }
                </Formik>
                {
                    this.state.seen ? <PopupForgotPassword toggle={this.togglePopup} /> : null
                }
            </div>
        );
    }
}

export default SignIn;