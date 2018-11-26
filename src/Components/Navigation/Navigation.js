import React, {Component} from 'react';
import './Navigation.css'
import {Link} from 'react-router-dom'
import logo from './logo.jpg'
import {connect} from 'react-redux';

class Navigation extends Component {


    render(){
        return(
            <div className='body'>
                <Link to='/dashboard'>
                <img className='logo' src={logo} alt="cool" />
                </Link>
               {this.props.playerName? <Link to='/settings' style={{textDecoration: 'none', color:'whitesmoke'}}>
                Welcome Back, {this.props.playerName}
                </Link> : ''
            }
           
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(Navigation);
