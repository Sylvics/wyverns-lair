import React, {Component} from 'react';
import './Choice.css'
import {Link} from 'react-router-dom'
class Choice extends Component{

    render(){
        return(
            <div className='selection'>
                <Link to='stepTwo' style={{textDecoration: 'none', color:'whitesmoke'}}>
                          <div  >
        
        <div>{this.props.name}</div>
      <div>{this.props.desc}</div>
      
        </div>
        </Link>
        
   


            </div>
      
        )
    }
}
export default Choice;