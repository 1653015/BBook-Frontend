import React, {Component} from 'react';
import './App.css';
import HeaderBar from '../HeaderBar/HeaderBar';
import SignIn from '../Auth/SignIn/SignIn';
import {
    HashRouter,
    Switch,
    Route
} from "react-router-dom";
import SignUp from '../Auth/SignUp/SignUp';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import ResetPassword from '../ResetPassword/ResetPassword'
import Exchange from '../Exchange/Exchange';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
        };
        this.LoginLogout = this.LoginLogout.bind(this);
    }

    

    componentDidMount(){}

    LoginLogout(isLogin) {
        this.setState({isLogin});
    }

    render() {
        return (
            <div className="App">
                <div className="background-image">
                    <div className="background-content">
                        <HashRouter>
                            <HeaderBar LoginLogout={(isLogin) => this.LoginLogout(isLogin)}/>
                            <Switch>
                                <Route exact path='/signin' >
                                    <SignIn LoginLogout={(isLogin) => this.LoginLogout(isLogin)}/>
                                </Route>
                                <Route exact path='/signup'>
                                    <SignUp LoginLogout={(isLogin) => this.LoginLogout(isLogin)}/>
                                </Route>
                                <Route exact path='/reset/:tokenId'>
                                    <ResetPassword/>
                                </Route>
                                <Route exact path='/exchange'>
                                    <Exchange/>
                                </Route>
                                <Route path='/'>
                                    <Home/>
                                </Route>
                                <Route component={ErrorPage}/>
                            </Switch>
                        </HashRouter>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
