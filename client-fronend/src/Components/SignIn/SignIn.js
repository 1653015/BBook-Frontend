import React, { Component } from 'react';
import {Formik} from 'formik'
import * as Yup from 'yup'
import './SignIn.css';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: ''
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
        return (
            <div className="SignIn">
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values, actions) => {
                        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/signin',{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({login_id: values.email, password: values.password})
                        })
                        .then(res => {
                            if(res.status === 400) {
                                res.text().then(text => this.setState({errorMessage: text}));
                            } else if (res.status === 200) {
                                this.setState({errorMessage: 'Đăng nhập thành công!!!'});
                            } else {
                                this.setState({errorMessage: 'Lỗi không xác định!!!'})
                            }
                        })
                        actions.setSubmitting(false);
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
                                <form onSubmit={props.handleSubmit} className="sign-in-up-form">
                                    <h1 style={{textAlign: "center"}} className="font-white">Đăng Nhập</h1>

                                    <div className="form-item">
                                        <div className="form-item-header">
                                            <div style={{textAlign: "center"}} className="font-white">Email (Tên Đăng Nhập)</div>
                                            {props.touched.email && props.errors.email? (
                                                <div className="invalid-message">{props.errors.email}</div>
                                            ) : null}
                                        </div>
                                        <input className="form-input"
                                            type="text"
                                            onChange={props.handleChange}
                                            value={props.values.email}
                                            name="email"
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
                                        />
                                    </div>
                                    <div className="error-message">{this.state.errorMessage}</div>
                                    <input type="submit" disabled={props.isSubmitting} value="Đăng Nhập"/>
                                </form>
                            )
                        }
                </Formik>
            </div>
        );
    }
}

export default SignIn;