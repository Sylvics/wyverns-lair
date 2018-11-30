import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Dashboard from './Components/Dashboard/Dashboard'
import StepOne from './Components/CharacterCreation/StepOne/StepOne'
import StepTwo from './Components/CharacterCreation/StepTwo/StepTwo'

export default(
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/welcome' component={Register}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path = '/step1' component={StepOne}/>
        <Route path = '/step2' component={StepTwo}/>

        
    </Switch>
)