import React, { Component } from 'react';
import {Formik} from 'formik'
import * as Yup from 'yup'
import './SignUp.css';

class SignUp extends Component {
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
            <div className="SignUp">
                <Formik
                    initialValues={{fullname: '', email: '', password: ''}}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);
                    }}
                    validationSchema={Yup.object({
                        fullname: Yup.string()
                            .required('Your name is empty'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Email is empty'),
                        password: Yup.string()
                            .min(8, 'To short!!!')
                            .max(50, 'To long!!!')
                            .required('Password is empty'),
                    })}
                    >
                        {
                            props => (
                                <form onSubmit={props.handleSubmit} className="sign-in-up-form">
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