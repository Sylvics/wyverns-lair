import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'


export default(
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/welcome' component={Register}/>
        
    </Switch>
)