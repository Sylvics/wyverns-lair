import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import Login from './Components/Login/Login'


export default(
    <Switch>
        <Route exact path='/' component={Login} />
        
    </Switch>
)