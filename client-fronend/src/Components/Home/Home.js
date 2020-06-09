import React, { Component } from 'react';
import './Home.css';
import Cookies from 'universal-cookie';
import SideBar from './SideBar/SideBar';
import BookSlider from './BookSlider/BookSlider';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            cookies: new Cookies()
        };
    }

    // componentWillMount(){}
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://bbook-backend.herokuapp.com/category')
        .then(res => res.json())
        .then(json => {
            this.setState({categories: json.categories});
        })
    }
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    // logout() {
    //     fetch('/user/logout',{method: 'POST'});
    //     this.state.cookies.remove('mUser');
    //     this.props.LoginLogout(false);
    //     this.setState({redirect: true});
    // }

    render() {
        return (
            <div className="container">
                <SideBar categories={this.state.categories}/>
                <div style={{width: '100%'}}>
                    {
                        this.state.categories.map(item => (
                            <BookSlider key={item._id} data_key={item._id} categories={item.name}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Home;