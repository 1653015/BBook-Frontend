import React, { Component } from 'react';
import './PopupChangePassword.css';
import {Formik} from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
class PopupChangePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
            hidePass: true,
            hidenewPass:true,
            hideretypePass:true,
            token: '',
        };
        this.changePassword = this.changePassword.bind(this);
        this.hideStatePass = this.hideStatePass.bind(this);
        this.hideStatenewPass = this.hideStatenewPass.bind(this);
        this.hideStateretypePass = this.hideStateretypePass.bind(this);
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

    
    changePassword(values, actions){
        if(values.newPassword === values.retypePass){
            fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': this.props.cookies.get('u_t')
                },
                body: JSON.stringify({oldPassword: values.oldPassword, newPassword: values.newPassword})
            })
            .then(res => res.json())
            .then(json => {
                if(!json.success){
                    this.setState({errorMessage: json.message});
                    actions.setSubmitting(false);
                } else {
                    this.props.toggle();
                    this.setState({errorMessage: json.message});
                }
            })
        } else {
            actions.setSubmitting(false);
        }
    }
    hideStatePass(){
        const{ hidePass } = this.state;
        if (hidePass){
        this.setState({
            hidePass:false
        })}
        else{
            this.setState({
                hidePass:true
            })
        }
    }
    hideStatenewPass(){
        const{ hidenewPass } = this.state;
        if (hidenewPass){
        this.setState({
            hidenewPass:false
        })}
        else{
            this.setState({
                hidenewPass:true
            })
        }
    }
    hideStateretypePass(){
        const{ hideretypePass } = this.state;
        if (hideretypePass){
        this.setState({
            hideretypePass:false
        })}
        else{
            this.setState({
                hideretypePass:true
            })
        }
    }
    render() {
        const eye_Pass = this.state.hidePass ? faEye : faEyeSlash;
        const eye_newPass = this.state.hidenewPass ? faEye : faEyeSlash;
        const eye_retypePass = this.state.hideretypePass ? faEye : faEyeSlash;
        return (
            <div className="PopupChangePassword" >
                <div className="PopupChangePassword-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <Formik
                        initialValues={{oldPassword: '', newPassword: '', retypePass: ''}}
                        onSubmit={(values, actions) => {
                            this.changePassword(values, actions);
                        }}
                        validationSchema={Yup.object({
                            oldPassword: Yup.string()
                                .min(8, 'To short!!!')
                                .required('Điền mật khẩu cũ'),
                            newPassword: Yup.string()
                                .min(8, 'To short!!!')    
                                .required('Điền mật khẩu mới'),
                            retypePass: Yup.string()
                                .min(8, 'To short!!!')
                                .required('Nhập lại mật khẩu mới')
                        })}>
                        {
                            props => (
                                <div>
                                    <h2>Đổi mật khẩu</h2>
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="inline">
                                        <input className="input-email"
                                            type={this.state.hidePass ? "password" : "text"}
                                            onChange={props.handleChange}
                                            value={props.values.oldPassword}
                                            name="oldPassword"
                                            placeholder="Mật khẩu cũ"
                                        />
                                        <FontAwesomeIcon icon={eye_Pass} onClick={this.hideStatePass} className="eye"/>
                                        </div>
                                        <div className="inline">
                                        <input className="input-email"
                                            type={this.state.hidenewPass ? "password" : "text"}
                                            onChange={props.handleChange}
                                            value={props.values.newPassword}
                                            name="newPassword"
                                            placeholder="Mật khẩu mới"
                                        />
                                        <FontAwesomeIcon icon={eye_newPass} onClick={this.hideStatenewPass} className="eye"/>
                                        </div>
                                        <div className="inline">
                                        <input className="input-email"
                                            type={this.state.hideretypePass ? "password" : "text"}
                                            onChange={props.handleChange}
                                            value={props.values.retypePass}
                                            name="retypePass"
                                            placeholder="Xác nhận mật khẩu mới"
                                        />
                                        <FontAwesomeIcon icon={eye_retypePass} onClick={this.hideStateretypePass} className="eye"/>
                                        </div>
                                        <div className="error-message">{this.state.errorMessage}</div>
                                        <input type="submit" disabled={props.isSubmitting} value="Xác nhận"/>
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

export default PopupChangePassword;