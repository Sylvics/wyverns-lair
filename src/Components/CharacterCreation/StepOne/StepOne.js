import React, {Component} from 'react';
import axios from 'axios';

class StepOne extends Component{
constructor(props){
    super(props);
    this.state = {
        raceList: [],
        classList: []
    }
}
    async componentDidMount(){
    let classes = await axios.get('/api/classes')
    }
    render(){
        return(<div>

        </div>)
    }
}
export default StepOne;