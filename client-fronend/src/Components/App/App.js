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

function App() {
    return (
        <div className="App">
            <div className="background-image"></div>
            <div className="background-content">
                <Router>
                    <HeaderBar/>
                    <Switch>
                        <Route path="/signin">
                            <SignIn/>
                        </Route>
                        <Route path="/signup">
                            <SignUp/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App;
