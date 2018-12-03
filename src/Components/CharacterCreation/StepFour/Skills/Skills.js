import React, {Component} from 'react';
import './Skills.css'
class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            skillTotal:0,
            ranks:0,
            abilityId:null
        }
    }
    componentDidMount(){
        this.setState({
            abilityId:this.props.abilityid
        })
    }
    handlePlus(){
        let num = this.state.ranks;
        num++;
        this.setState({
            ranks:num
        })
    }
    handleMinus(){
        let num = this.state.ranks;
        num--;
        this.setState({
            ranks:num
        })
    }
    render(){
        return(<div className='containingOver'>
             <div className='container'>
      <div>{this.props.name}</div>
<div>{this.props.keyability.toUpperCase()}</div>
<div>{this.props.desc}</div>
</div>
<div>{this.state.ranks}+{0} </div>
<button onClick={() => this.handleMinus()}>
    -
</button>
<button onClick={() => this.handlePlus()}>
    +
</button>
    
        
            </div>
            
        )
    }
  
} 
export default Skills;