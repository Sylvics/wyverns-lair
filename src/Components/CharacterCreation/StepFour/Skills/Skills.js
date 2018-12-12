import React, {Component} from 'react';
import './Skills.css'
import {connect} from 'react-redux';
class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            skillTotal:0,
            ranks:0,
            abilityId:0,
            abBonus:0
        }
    }
    async componentDidMount(){
        await this.setState({
            abilityId:this.props.abilityId
            
        })
        
        if(this.state.abilityId===0){
            this.setState({abBonus:this.props.abilityScore.strMod})
        }
        else if(this.state.abilityId===1){
            this.setState({abBonus:this.props.abilityScore.dexMod})
        }
        else if(this.state.abilityId===2){
            this.setState({abBonus:this.props.abilityScore.conMod})
        }
        else if(this.state.abilityId===3){
            this.setState({abBonus:this.props.abilityScore.intMod})
        }
        else if(this.state.abilityId===4){
            this.setState({abBonus:this.props.abilityScore.wisMod})
        }
        else if(this.state.abilityId===5){
            this.setState({abBonus:this.props.abilityScore.chaMod})
        }else{
            this.setState({abBonus:0})
        }
    }
    handlePlus(){
        let num = this.state.ranks;
       

        num++;
        let num2 = this.state.abBonus+num;
        this.setState({
            ranks:num,
            skillTotal:num2
        })

    }
    handleMinus(){
        let num = this.state.ranks;
        
        num--;
        let num2=this.state.abBonus+num;
        this.setState({
            ranks:num,
            skillTotal:num2
        })
    }
    render(){
        return(<div className='containingOver'>
             <div className='container'>
      <div className='skillName'>{this.props.name}</div>
<div className='skillAbility'>{this.props.keyability.toUpperCase()}</div>
<div className='skillDescription'>{this.props.desc}</div>
</div>
<div>{this.state.ranks}+{this.state.abBonus}={this.state.skillTotal} </div>
<button className='skillbuttons' onClick={() => this.handleMinus()}>
    -
</button>
<button className='skillbuttons' onClick={() => this.handlePlus()}>
    +
</button>
    
        
            </div>
            
        )
    }
  
} 
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(Skills);