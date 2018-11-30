import React, {Component} from 'react';
import axios from 'axios';
import './SubNav.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class SubNav extends Component{
constructor(props){
    super(props);
    this.state = {

    }
}

    render(){
        return(<div className ='bar'>
            <div>
                 {this.props.race.race_name?<Link to='/step1' className='Item'>Step One:{this.props.race.race_name}</Link>:''}
            </div>
        </div>)
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(SubNav);