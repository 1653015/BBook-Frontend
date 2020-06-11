import React, { Component } from 'react';
import './PopupChangeBook.css';
import {Formik} from 'formik';
import { Redirect } from 'react-router-dom';

class PopupChangeBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
            token: '',
            books: [],
            offering: ''
        };

    }

    // componentWillMount() {
        
    // }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/books/stash', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                this.setState({books: json.books.books});
            }
        })
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    handleClick = () => {
        this.props.toggle();
    };

    handleChange = (evt) => {
        this.setState({
            offering: evt.target.value
        });
    };

    submitOffer = (values, actions) => {
        console.log('asdjfkljsdfl');

        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/offer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            },
            body: {
                to: this.props.traderq.op,
                for: this.props.traderq.book,
                offering: values.value,
                post: this.props.traderq._id,
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                actions.setSubmitting(false);
                return(<Redirect to="/"/>);
            }
        });
        return(<Redirect to="/"/>)
    }
    
    render() {
        return (
            <div className="PopupChangeBook" >
                <div className="PopupChangeBook-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <Formik
                        initialValues={{books: this.state.books}}
                        onSubmit={(values, actions) => {
                            this.submitOffer(values, actions);
                        }}>
                        {
                            props => (
                                <div>
                                    <h2>Chọn sách của bạn</h2>
                                    <form onSubmit={props.handleSubmit} className="select-book-exchange">
                                        <div className="inline">
                                        <input 
                                            disabled={this.state.isDisable}
                                            list="listUserBooks" 
                                            name="books" 
                                            type="text"
                                            onChange={this.handleChange}
                                            value={this.state.book}/>
                                        <datalist id="listUserBooks">
                                            {
                                                this.state.books && this.state.books.map(book => (
                                                    <option
                                                        key={book._id}
                                                        value={book.name}> {book.name} </option>
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