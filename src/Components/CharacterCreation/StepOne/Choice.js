import React, {Component} from 'react';
import './Choice.css'
class Choice extends Component{

    render(){
        return(
            <div className='selection'>
            <div>{this.props.name}</div>
          <div>{this.props.desc}</div>
          
            </div>
        )
    }
}
export default Choice;