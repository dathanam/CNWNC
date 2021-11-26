import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Auth/Login/Login.jsx';
import SelectCode from '../Auth/SelectCode/SelectCode.jsx';

function LayoutAuth() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/selectcode" component={SelectCode} />
                </Switch>
            </Router>
        </div>
    );
}

export default LayoutAuth;