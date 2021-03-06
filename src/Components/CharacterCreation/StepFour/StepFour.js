import React, {Component} from 'react';
import axios from 'axios';
import Skills from './Skills/Skills'
import SubNav from './../SubNav/SubNav'
import './StepFour.css'
import {connect} from 'react-redux'
class StepFour extends Component{
    constructor(props){
        super(props);
        this.state = {
            skillList: [],
        }
    }

    async componentDidMount(){
    let res = await axios.get('/api/skills')
    console.log(res.data)
    this.setState({skillList:res.data})

    }
    render(){
        let list = this.state.skillList.map(skill => {return <Skills  
            name={skill.skillname}
             keyability={skill.keyability}
              abilityId={skill.abilityid}
               desc={skill.description} />})
        return(
        <div className='listContainer'>
        <SubNav/>
       <h1>Please rank up your skills</h1>
      {list}
        </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(StepFour);