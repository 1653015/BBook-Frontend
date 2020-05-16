import React, { Component } from 'react';
import {Formik} from 'formik'
import * as Yup from 'yup'
import './SignIn.css';

class SignIn extends Component {
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
            <div className="SignIn">
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);
                    }}
                    validationSchema={Yup.object({
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
                                <form onSubmit={props.handleSubmit} className="sign-in-form">
                                    <h1 style={{textAlign: "center"}}>Đăng Nhập</h1>
                                    <div>Email</div>
                                    <input className="form-input"
                                        type="email"
                                        onChange={props.handleChange}
                                        value={props.values.email}
                                        name="email"
                                    />
                                    {props.touched.email && props.errors.email? (
                                        <div className="invalid-message">{props.errors.email}</div>
                                    ) : null}
                                    <div>Password</div>
                                    <input className="form-input"
                                        type="password"
                                        onChange={props.handleChange}
                                        value={props.values.password}
                                        name="password"
                                    />
                                    {props.touched.password && props.errors.password? (
                                        <div className="invalid-message">{props.errors.password}</div>
                                    ) : null}
                                    <div className="button-form">
                                        <input type="submit" disabled={props.isSubmitting} value="Đăng Nhập"/>
                                    </div>
                                </form>
                            )
                        }
                </Formik>
            </div>
        );
    }
}

export default SignIn;