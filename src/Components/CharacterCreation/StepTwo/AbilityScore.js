import React, {Component} from 'react';
import {connect} from 'react-redux';
import './AbilityScore.css';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css'

class AbilityScore extends Component{
 constructor(props){
     super(props);
     this.state = {
         input:''
     }
 }

    rollDone(num1){
       
    }
    rollAll() {
        this.reactDice.rollAll();
    }
    render(){
        return(
        <div className='StatRollers'>
            <div className='ability'>
{this.props.name}: {this.props.abilityScore? <div className='ability'>{this.props.abilityScore}+ </div> :'' }
 <input type='number' className='numInput' name={this.props.name} onChange={this.props.handleAbility} /> 
</div><br/>
<button onClick={() => this.rollAll()}>Roll {this.props.abilityName}</button>
<ReactDice rollDone={this.rollDone} outline={true} 
outlineColor={'black'} 
margin = {10} 
faceColor={'#464B35'} 
dotColor={'black'}
dieSize={30}
ref={dice => this.reactDice = dice}/>
        </div>
            )
    
    
    }
}
function mapStateToProps(state){
    return {race: state.race};
}
export default connect(mapStateToProps)(AbilityScore);