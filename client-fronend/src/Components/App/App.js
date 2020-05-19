import React from 'react';
import './App.css';
import HeaderBar from '../HeaderBar/HeaderBar';
import SignIn from '../SignIn/SignIn';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';

function App() {
    return (
        <div className="App">
            <div className="background-image"></div>
            <div className="background-content">
                <Router basename={process.env.PUBLIC_URL + '/#'}>
                    <HeaderBar/>
                    <Switch>
                        <Route path='/signin' >
                            <SignIn/>
                        </Route>
                        <Route path='/signup'>
                            <SignUp/>
                        </Route>
                        <Route path='/'>
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App;
