import React, { Component } from 'react';
import './ResetPassword.css';
import { withRouter, Redirect } from 'react-router-dom';
import {Formik} from 'formik'
import * as Yup from 'yup'

class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    // componentWillMount(){}
    componentDidMount(){
        
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    resetPassword(values, actions) {
        if(values.newPassword === values.retypePassword){
            fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/auth/reset/'+this.props.match.params.tokenId,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({password: values.newPassword})
            })
            .then(res => res.json())
            .then(json => {
                if(json.success){

                } else {

                }
                actions.setSubmitting(false);
            })
        }
    }

    render() {
        if(this.props.cookies.get('isLogin')){
            return(<Redirect to="/"/>)
        }
        return (
            <div className="ResetPassword">
                <Formik
                    initialValues={{newPassword: '', retypePassword: ''}}
                    onSubmit={(values, actions) => {
                        this.resetPassword(values, actions);
                    }}
                    validationSchema={Yup.object({
                        newPassword: Yup.string()
                            .min(8, 'Quá ngắn!!!')
                            .required('Mật khẩu không được để trống'),
                        retypePassword: Yup.string()
                            .min(8, 'Quá ngắn!!!')
                            .required('Mật khẩu không được để trống'),
                    })}>
                    {
                        props => (
                            <form onSubmit={props.handleSubmit} className="signup-form">
                                <h1 className="text-white  text-center">Đặt lại password</h1>
                                <div className="form-item">
                                    <div className="form-item-header">
                                        <div className="font-white">Mật khẩu mới</div>
                                        {props.touched.newPassword && props.errors.newPassword? (
                                            <div className="invalid-message">{props.errors.newPassword}</div>
                                        ) : null}
                                    </div>
                                    <input className="form-input"
                                        type="password"
                                        onChange={props.handleChange}
                                        value={props.values.newPassword}
                                        name="newPassword"
                                        placeholder="Hãy nhập mật khẩu mới"
                                    />
                                </div>
                                <div className="form-item">
                                <div className="form-item-header">
                                        <div className="font-white">Nhập lại mật khẩu</div>
                                        {props.touched.retypePassword && props.errors.retypePassword? (
                                            <div className="invalid-message">{props.errors.retypePassword}</div>
                                        ) : null}
                                    </div>
                                    <input className="form-input"
                                        type="password"
                                        onChange={props.handleChange}
                                        value={props.values.newPassword}
                                        name="newPassword"
                                        placeholder="Hãy nhập mật khẩu mới"
                                    />
                                </div>
                                <input disabled={props.isSubmitting} type="submit" value="Gửi"/>
                            </form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}

export default withRouter(ResetPassword);