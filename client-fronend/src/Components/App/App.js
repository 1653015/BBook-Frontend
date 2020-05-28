import React, {Component} from 'react';
import './App.css';
import HeaderBar from '../HeaderBar/HeaderBar';
import SignIn from '../Auth/SignIn/SignIn';
import {
    HashRouter,
    Switch,
    Route
} from "react-router-dom";
import Cookies from 'universal-cookie';
import SignUp from '../Auth/SignUp/SignUp';
import LandingPage from '../LandingPage/LandingPage';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            cookies: new Cookies(),
        };
    }

    

    componentDidMount(){
        if(this.state.cookies.get('userToken')){
            this.setState({isLogin: true});
        }
        else {
            this.setState({isLogin: false});
        }
    }

    LoginLogout(isLogin) {
        this.setState({isLogin});
    }

    render() {
        return (
            <div className="App">
                <div className="background-image">
                    <div className="background-content">
                        <HashRouter>
                            <HeaderBar isLogin={this.state.isLogin} LoginLogout={(isLogin) => this.LoginLogout(isLogin)}/>
                            <Switch>
                                <Route exact path='/signin' >
                                    <SignIn LoginLogout={(isLogin) => this.LoginLogout(isLogin)}/>
                                </Route>
                                <Route exact path='/signup'>
                                    <SignUp LoginLogout={(isLogin) => this.LoginLogout(isLogin)}/>
                                </Route>
                                <Route exact path='/home'>
                                    <Home/>
                                </Route>
                                <Route exact path='/'>
                                    <LandingPage/>
                                </Route>
                                <Route>
                                    <ErrorPage/>
                                </Route>
                            </Switch>
                        </HashRouter>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
