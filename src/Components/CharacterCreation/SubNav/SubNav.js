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
            <div>{this.props.abilityScore.Strength?<Link to='/step2' className='Item'>Step Two:Ability Scores</Link>: ''}</div>
        </div>)
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(SubNav);