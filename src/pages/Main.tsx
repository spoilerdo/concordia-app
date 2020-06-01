import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login';

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
        </Switch>
    )
}