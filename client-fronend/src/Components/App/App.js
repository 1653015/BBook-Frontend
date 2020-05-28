import React from 'react';
import './App.css';
import HeaderBar from '../HeaderBar/HeaderBar';
import SignIn from '../SignIn/SignIn';
import {
    HashRouter,
    Switch,
    Route
  } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import LandingPage from '../LandingPage/LandingPage';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
    return (
        <div className="App">
            <div className="background-image">
                <div className="background-content">
                    <HashRouter>
                        <Switch>
                            <Route exact path='/signin' >
                                <HeaderBar/>
                                <SignIn/>
                            </Route>
                            <Route exact path='/signup'>
                                <HeaderBar/>
                                <SignUp/>
                            </Route>
                            <Route exact path='/home'>
                                <HeaderBar isLogin={true}/>
                                <Home/>
                            </Route>
                            <Route exact path='/'>
                                <HeaderBar/>
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
    )
}

export default App;
