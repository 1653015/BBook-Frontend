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
                <Router>
                    <HeaderBar/>
                    <Switch>
                        <Route path="/signin" component={App}>
                            <SignIn/>
                        </Route>
                        <Route path="/signup" component={App}>
                            <SignUp/>
                        </Route>
                        <Route path="/" component={App}>
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App;
