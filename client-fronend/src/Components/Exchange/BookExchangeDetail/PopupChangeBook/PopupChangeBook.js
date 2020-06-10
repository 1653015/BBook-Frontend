import React, { Component } from 'react';
import './PopupChangeBook.css';
import {Formik} from 'formik'

class PopupChangeBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
            token: '',
            books: [],
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

    submitOffer = (values, actions) => {
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/user/books/stash', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.props.cookies.get('u_t')
            },
            body: {
                to: '',
                for: '',
                offering: values.value,
                post: '',
            }
        });
    }
    
    render() {
        return (
            <div className="PopupChangeBook" >
                <div className="PopupChangeBook-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <Formik
                        initialValues={this.state.books[0]}
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
                                            name="userBooks" 
                                            type="text"
                                            onChange={props.handleChange}
                                            value={props.values.books}/>
                                        <datalist id="listUserBooks">
                                            {
                                                this.state.books && this.state.books.map(book => (
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