import React, { Component } from 'react';
import {Formik} from 'formik'
import * as Yup from 'yup'
import './SignUp.css';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
            redirect: false,
            cookies: new Cookies()
        };
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    signup(values, actions){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/register/email-activation',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: values.fullname, 
                    password: values.password,
                    email: values.email,
                    phone: values.phoneNumber.toString(),
                }
            )
        })
        .then(res => {
            if(res.status === 400) {
                res.text().then(text => this.setState({errorMessage: text}));
                actions.setSubmitting(false);
            } else if (res.status === 200) {
                // this.props.LoginLogout(true);
                // this.setState({redirect: true});
                // res.json().then(json => {this.setState({errorMessage: json.message})});
                this.setState({errorMessage: 'Đăng ký thành công, link kích hoạt tài khoản đã được gửi tới email của bạn'});
            } else {
                this.setState({errorMessage: 'Lỗi không xác định!!!'});
                actions.setSubmitting(false);
            }
        });
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to='/'/>)
        }

        if(this.state.cookies.get('isLogin')){
            return (<Redirect to='/'/>)
        }

        return (
            <div className="SignUp">
                <Formik
                    initialValues={{fullname: '', email: '', password: '',phoneNumber: ''}}
                    onSubmit={(values, actions) => {
                        this.signup(values, actions);
                    }}
                    validationSchema={Yup.object({
                        fullname: Yup.string()
                            .required('Tên người dùng còn trống'),
                        email: Yup.string()
                            .email('Email không hợp lệ')
                            .required('Email không được để trống'),
                        password: Yup.string()
                            .min(8, 'Quá ngắn!!!')
                            .required('Mật khẩu không được để trống'),
                        phoneNumber: Yup.number()
                            .moreThan(99999999, 'Số điện thoại ít nhất 9 chữ số')
                            .positive('không được có kí tự trong sđt'),
                    })}
                    >
                        {
                            props => (
                                <form onSubmit={props.handleSubmit} className="signup-form">
                                    <h1 style={{textAlign: "center"}} className="font-white">Đăng Kí</h1>
                                    <div className="form-item">
                                        <div className="form-item-header">
                                            <div className="font-white">Tên Đăng Nhập</div>
                                            {props.touched.email && props.errors.email? (
                                                <div className="invalid-message">{props.errors.fullname}</div>
                                            ) : null}
                                        </div>
                                        <input className="form-input"
                                            type="text"
                                            onChange={props.handleChange}
                                            value={props.values.fullname}
                                            name="fullname"
                                            placeholder="Hãy nhập họ và tên"
                                        />
                                    </div>
                                    <div className="form-item">
                                        <div className="form-item-header">
                                            <div className="font-white">Email</div>
                                            {props.touched.email && props.errors.email? (
                                                <div className="invalid-message">{props.errors.email}</div>
                                            ) : null}
                                        </div>
                                        <input className="form-input"
                                            type="email"
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
                                    <div className="form-item">
                                        <div className="form-item-header">
                                            <div className="font-white">Số điện thoại</div>
                                            {props.touched.phoneNumber && props.errors.phoneNumber? (
                                                <div className="invalid-message">{props.errors.phoneNumber}</div>
                                            ) : null}
                                        </div>
                                        <input className="form-input"
                                            type="tel"
                                            onChange={props.handleChange}
                                            value={props.values.phoneNumber}
                                            name="phoneNumber"
                                            placeholder="0xxxxx"
                                        />
                                    </div>
                                    <div className="error-message">{this.state.errorMessage}</div>
                                    <input type="submit" disabled={props.isSubmitting} value="Đăng Kí"/>
                                </form>
                            )
                        }
                </Formik>
            </div>
        );
    }
}

export default SignUp;