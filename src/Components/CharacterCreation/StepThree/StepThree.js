import React, {Component} from 'react';
import axios from 'axios';
import ClassChoice from './ClassChoice';
import SubNav from './../SubNav/SubNav'


class StepThree extends Component{
constructor(props){
    super(props);
    this.state = {
        classList: []
    }
}
    async componentDidMount(){
        let res = await axios.get('/api/classes')
        this.setState({
            classList: res.data
        })
        console.log(this.state.classList)
    }

    render(){
        var list = this.state.classList.map(klass => {return <ClassChoice name={klass.class_name} desc={klass.class_description}/>})
        return(
            <div >
                <SubNav></SubNav>
                <div className='Classlist'>
                {list}
                </div>

            </div>
        )
    }
}
export default StepThree;
