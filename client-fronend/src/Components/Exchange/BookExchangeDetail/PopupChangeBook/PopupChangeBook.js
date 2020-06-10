import React, { Component } from 'react';
import './PopupChangeBook.css';
import {Formik} from 'formik'
import * as Yup from 'yup'
class PopupChangeBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
            token: '',
            storeBooks: [],
        };

    }
    // componentWillMount(){}
    // componentDidMount(){
    //     this.loadStoreBooks();
    // }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    handleClick = () => {
        this.props.toggle();
    };
    
    
    render() {
        return (
            <div className="PopupChangeBook" >
                <div className="PopupChangeBook-content">
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
                                    <h2>Chọn sách của bạn</h2>
                                    <form onSubmit={props.handleSubmit} className="select-book-exchange">
                                        <div className="inline">
                                        <input 
                                            disabled={this.state.isDisable}
                                            list="listUserBooks" 
                                            name="userBooks" 
                                            type="text"
                                            onChange={props.handleChange}
                                            value={props.values.userBooks}/>
                                        <datalist id="listUserBooks">
                                            {
                                                this.state.userBooks&&this.state.userBooks.map(book => (
                                                    <option key={book._id} value={book._id}>{book.name}</option>
                                                ))
                                            }
                                        </datalist>
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

export default PopupChangeBook;