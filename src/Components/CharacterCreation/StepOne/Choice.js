import React, {Component} from 'react';
import './Choice.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios';
import {updateRace} from './../../../ducks/reducer'
class Choice extends Component{
constructor(props){
    super(props);
    this.state = {
        raceName: '',
        raceData: {}
    }
}
async raceSelection(){
    this.setState({
        raceName:this.props.name
    })
    let res = await axios.get(`/api/races/${this.props.name}`)
    console.log(res.data)
this.setState({
    raceData: res.data
})
this.props.updateRace(res.data)
}
    render(){
        return(
            <div className='selection'>
                <Link to='step2' style={{textDecoration: 'none', color:'whitesmoke'}} onClick={() => this.raceSelection()}>
                          <div  >
        
        <div>{this.props.name}</div>
      <div>{this.props.desc}</div>
        </div>
        </Link>
        
   


            </div>
      
        )
    }
}
export default connect(null, {updateRace})(Choice);