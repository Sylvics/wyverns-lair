import React, {Component} from 'react';
import {connect} from 'react-redux';
import './AbilityScore.css';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css'
class AbilityScore extends Component{
 
    rollDone(num1, num2, num3, num4){
        console.log(num1, num2, num3, num4);
    }
    rollAll() {
        this.reactDice.rollAll();
    }
    render(){
        return(
        <div>
            <div className='ability'>
{this.props.abilityName}: {this.props.abilityScore? <div className='ability'>{this.props.abilityScore}+ </div> :'' } <input type='number' className='numInput' /> 
</div><br/>
<button onClick={() => this.rollAll()}>Roll {this.props.abilityName}</button>
<ReactDice rollDone={this.rollDone} outline={true} 
outlineColor={'#BD0609'} 
margin = {10} 
faceColor={''} 
dotColor={'#BD0609'}
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