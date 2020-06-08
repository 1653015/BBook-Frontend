import React, { Component } from 'react';
import './UpdateShippingInfor.css';
import { Formik } from 'formik';
import * as Yup from 'yup'

class UpdateShippingInfor extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: ''
        };
        this.updateAddress = this.updateAddress.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
    }
    updateAddress(values, actions){
        console.log(values.address)
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/address',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t') 
            },
            body: JSON.stringify(
                {
                    address: values.address,
                }
            )
        })
        .then(res => res.json())
        .then((json) => {
            if(json.success){
                this.updatePhone(values, actions);
            }else {
                actions.setSubmitting(false);
            }
        })
    }
    updatePhone(values, actions){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/numbers',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            },
            body: JSON.stringify(
                {
                    phone: values.phone,
                }
            )
        })
        .then(res => res.json())
        .then((json) => {
            if(json.success){
                this.props.cookies.set('m_inf_u', json.user);
                this.props.closeUpdate();
            }else {
                actions.setSubmitting(false);
            }
        })
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
            <div className="UpdateShippingInfor">
                <div className="updateShippingInfor-content">
                    <Formik
                        initialValues={{
                            address: this.props.cookies.get('m_inf_u').address,
                            phone: this.props.cookies.get('m_inf_u').phone}}
                        onSubmit={(values, actions) => {
                            this.updateAddress(values, actions);
                        }}
                        validationSchema={Yup.object({
                            address: Yup.string()
                                .required('address is empty'),
                            phone: Yup.number()
                                .required('Số điện thoại không được để trống')
                                .moreThan(99999999, 'Số điện thoại ít nhất 9 chữ số')
                                .positive('không được có kí tự trong sđt'),
                        })}
                        >
                            {
                                props => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="form-item">
                                            <div className="form-item-header">
                                                <div style={{textAlign: "center"}}>Địa chỉ</div>
                                                {props.touched.address && props.errors.address? (
                                                    <div className="invalid-message">{props.errors.address}</div>
                                                ) : null}
                                            </div>
                                            <input className="form-input"
                                                type="text"
                                                onChange={props.handleChange}
                                                value={props.values.address}
                                                name="address"
                                                placeholder="Hãy nhập địa chỉ của bạn"
                                            />
                                        </div>
                                        <div className="form-item">
                                            <div className="form-item-header">
                                                <div>Số điện thoại</div>
                                                {props.touched.phone && props.errors.phone? (
                                                    <div className="invalid-message">{props.errors.phone}</div>
                                                ) : null}
                                            </div>
                                            <input className="form-input"
                                                type="phone"
                                                onChange={props.handleChange}
                                                value={props.values.phone}
                                                name="phone"
                                                placeholder="Hãy nhập mật khẩu của bạn"
                                            />
                                        </div>
                                        <div className="error-message">{this.state.errorMessage}</div>
                                        <input type="submit" disabled={props.isSubmitting} value="Gửi"/>
                                    </form>
                                )
                            }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default UpdateShippingInfor;