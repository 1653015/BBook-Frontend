import React, { Component } from 'react';
import './CreateExchangeBook.css';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 500,
        },
    },
};
class CreateExchangeBook extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            userBooks: [],
            storeBooks: [],
            isDisable: false,
            value: [],
        };
        this.loadUserBooks = this.loadUserBooks.bind(this);
        this.loadStoreBooks = this.loadStoreBooks.bind(this);
        this.postTrade = this.postTrade.bind(this);
        
    }
    handleChange = (evt) => {
        this.setState({
            value: evt.target.value
        });
    };
    
    
    loadUserBooks() {
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/books/stash',{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.success){
                this.setState({userBooks: json.books.books});
                if(this.state.userBooks.length === 0){
                    this.setState({isDisable: true});
                }
            }
        })
    }
    loadStoreBooks() {
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/book',{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.success){
                this.setState({storeBooks: json.books});
            }
        })
    }

    // componentWillMount(){}
    componentDidMount(){
        this.loadUserBooks();
        this.loadStoreBooks();
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    postTrade(values, actions) {
        console.log(values.storeBooks);
        console.log(values.userBooks);
        actions.setSubmitting(false);
    }

    render() {
        if(!this.props.cookies.get('isLogin')){
            return(<Redirect to="/"/>)
        }
        return (
            <div className="container">
                <div className="CreateExchangeBook">
                    <Formik
                        initialValues={{userBooks: '', storeBooks: ''}}
                        onSubmit={(values, actions) => {
                            this.postTrade(values, actions);
                        }}
                        validationSchema={Yup.object({
                            userBooks: Yup.string()
                                .required('Email is empty'),
                            storeBooks: Yup.string()
                                .min(8, 'To short!!!')
                                .required('Password is empty'),
                        })}
                        >
                            {
                                props => (
                                    <form autoComplete="off" onSubmit={props.handleSubmit} className="createEx">
                                        <h1 style={{textAlign: "center"}} className="font-white">Đăng ký đổi sách</h1>
                                        <div className="form-item">
                                            <div className="form-item-header">
                                                <div style={{textAlign: "center"}} className="font-white" >Sách để đổi</div>
                                                {props.touched.email && props.errors.email? (
                                                    <div className="invalid-message">{props.errors.email}</div>
                                                ) : null}
                                            </div>
                                            <input 
                                                disabled={this.state.isDisable}
                                                list="listUserBooks" 
                                                name="userBooks" 
                                                onChange={props.handleChange}
                                                value={props.values.userBooks}/>
                                            <datalist id="listUserBooks">
                                                {
                                                    this.state.userBooks&&this.state.userBooks.map(book => (
                                                        <option key={book._id} value={book.name}/>
                                                    ))
                                                }
                                            </datalist>
                                        </div>
                                        <div className="form-item">
                                            <div className="form-item-header">
                                                <div className="font-white">Sách muốn đổi</div>
                                                {props.touched.password && props.errors.password? (
                                                    <div className="invalid-message">{props.errors.password}</div>
                                                ) : null}
                                                
                                            </div>
                                            <Select
                                                className="MultipleSelect"
                                                labelId="demo-mutiple-chip-label"
                                                id="demo-mutiple-chip"
                                                multiple
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                                
                                                MenuProps={MenuProps}
                                                >
                                                {
                                                    this.state.storeBooks.map(book => (
                                                        <MenuItem key={book._id} value={book.name}>
                                                            {book.name}
                                                        </MenuItem>
                                                    ))
                                                }
                                                </Select>
                                            
                                        </div>
                                    
                                        <div className="error-message">{this.state.errorMessage}</div>
                                        <input type="submit" disabled={props.isSubmitting} value="Đăng"/>
                                        
                                    </form>
                                )
                            }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default CreateExchangeBook;