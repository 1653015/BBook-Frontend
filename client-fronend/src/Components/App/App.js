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
                        <Route path="/BBook-Frontend/signin">
                            <SignIn/>
                        </Route>
                        <Route path="/BBook-Frontend/signup">
                            <SignUp/>
                        </Route>
                        <Route path="/BBook-Frontend">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App;
