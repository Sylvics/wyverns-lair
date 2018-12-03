import React, {Component} from 'react';
import './ClassChoice.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios';
// import {updateRace} from '../../../ducks/reducer'
class ClassChoice extends Component{
constructor(props){
    super(props);
    this.state = {
        className: '',
        classData: {}
    }
}
async raceSelection(){
    this.setState({
        className:this.props.name
    })

this.setState({
    classData: this.props.desc
})

}
    render(){
        return(
            <div className='selection'>
                <Link to='step4' style={{textDecoration: 'none', color:'whitesmoke'}} onClick={() => this.raceSelection()}>
                          <div  >
        
        <div>{this.props.name}</div>
      <div>{this.props.desc}</div>
        </div>
        </Link>
        
   


            </div>
      
        )
    }
}
export default ClassChoice;