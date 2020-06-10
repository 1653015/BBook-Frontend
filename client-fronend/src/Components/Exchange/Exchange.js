import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './Exchange.css';
import { Redirect } from 'react-router-dom';
import ItemExchange from './ItemExchange/ItemExchange';

class Exchange extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies: new Cookies(),
            tradeqs: []
        };
    }

    // componentWillMount(){}
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/traderq',{
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.state.cookies.get('u_t')
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.success){
                this.setState({tradeqs: json.posts});
            } else {
                console.log('fail');
            }
        })
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        if(!this.state.cookies.get('isLogin')){
            return(<Redirect path='/'/>)
        }
        return (
                <div className="Exchange">
                {
                    this.state.tradeqs.map(post => (
                        <div key={post._id} className="item-box">
                            <ItemExchange
                                key_data={post._id} 
                                image={post.book&&post.book.image} 
                                name={post.book&&post.book.name} 
                                owner={post.op.name}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Exchange;