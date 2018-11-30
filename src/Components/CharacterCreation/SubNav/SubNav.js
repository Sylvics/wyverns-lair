import React, {Component} from 'react';
import axios from 'axios';
import './SubNav.css'
import {connect} from 'react-redux';
class SubNav extends Component{
constructor(props){
    super(props);
    this.state = {

    }
}

    render(){
        return(<div className ='bar'>
            <div>
                {this.props.race.race_name?<div>{this.props.race.race_name}</div>:''}
            </div>
        </div>)
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(SubNav);