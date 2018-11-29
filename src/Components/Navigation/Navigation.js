import React, {Component} from 'react';
import './Navigation.css'
import {Link} from 'react-router-dom'
import logo from './logo.jpg'
import {connect} from 'react-redux';
import axios from 'axios';
class Navigation extends Component {


  async handleLogout(){
    let promise = await axios.get('/auth/logout')
    console.log(promise.data);
    
  }

    render(){
        return(
            <div className='body'>
                <Link to='/dashboard'>
                <img className='logo' src={logo} alt="cool" />
                </Link>
               {this.props.session.data? <Link to='/settings' style={{textDecoration: 'none', color:'whitesmoke'}}>
                Welcome Back, {this.props.session.data.player_name}
                </Link> : ''
                
            }
            {this.props.session.data? 
                <Link to='/'> <button onClick={() => this.handleLogout()}>Logout</button></Link>
           

             : ''}
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(Navigation);
