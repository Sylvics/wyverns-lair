import React, {Component} from 'react';
import axios from 'axios';
import SubNav from './../SubNav/SubNav';
import './StepOne.css'
import Choice from './Choice.js';
class StepOne extends Component{
constructor(props){
    super(props);
    this.state = {
        raceList: [],
        classList: []
    }
}
    async componentDidMount(){
    let res = await axios.get('/api/races')
    this.setState({
        raceList: res.data
    })
    
    }
    render(){
        var list = this.state.raceList.map(race => {return <Choice  name={race.race_name} desc={race.race_description}/>})
        return(<div>
<SubNav />
<div className='contDiv'>
{list}

</div>
        </div>)
    }
}
export default StepOne;