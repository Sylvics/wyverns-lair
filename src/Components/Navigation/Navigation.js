import React, {Component} from 'react';
import './Navigation.css'
import {Link} from 'react-router-dom'
import logo from './logo.jpg'
class Navigation extends Component {


    render(){
        return(
            <div className='body'>
                <Link to='/dashboard'>
                <img className='logo' src={logo} alt="cool" />
                </Link>

            </div>
        )
    }
}
export default Navigation;
