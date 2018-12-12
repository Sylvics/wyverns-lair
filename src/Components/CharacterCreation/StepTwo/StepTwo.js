import React, {Component} from 'react';
import SubNav from './../SubNav/SubNav';
import './StepTwo.css'
import {connect} from 'react-redux'
import AbilityScore from './AbilityScore.js';
import {updateAbilityScore} from './../../../ducks/reducer'
import {Link} from 'react-router-dom'

class StepTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            Strength:0,
            Dexterity:0,
            Constitution:0,
            Intelligence:0,
            Wisdom:0,
            Charisma:0

        }

    }
 handleSubmit(){
     let strMod = Math.trunc(this.state.Strength/2)-5;
     let dexMod = Math.trunc(this.state.Dexterity/2)-5;
     let conMod = Math.trunc(this.state.Constitution/2)-5;
     let intMod = Math.trunc(this.state.Intelligence/2)-5;
     let wisMod = Math.trunc(this.state.Wisdom/2)-5;
     let chaMod = Math.trunc(this.state.Charisma/2)-5;

     let scores = {Strength:this.state.Strength,strMod,

    Dexterity: this.state.Dexterity,
    dexMod,

Constitution:this.state.Constitution,
conMod,
Intelligence:this.state.Intelligence,
intMod,
Wisdom:this.state.Wisdom,
wisMod,
Charisma:this.state.Charisma,
chaMod}
console.log(scores)

this.props.updateAbilityScore(scores);
 }
 handleChildChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
 }
    render(){
      
        return(
            <div>
<SubNav/>

<div className='abScoreEntryList'>
<div className='direction'>
<h1>Please select your ability scores.</h1>
<h2>Roll the dice, drop the lowest number, and add it to your ability score.</h2>
</div>
<div className='Abilities'>
<AbilityScore name='Strength' abilityScore={this.props.race.strength} handleAbility={this.handleChildChange}/>
<AbilityScore name='Dexterity' abilityScore={this.props.race.dexterity} handleAbility={this.handleChildChange}/>
<AbilityScore name='Constitution' abilityScore={this.props.race.constitution} handleAbility={this.handleChildChange}/>
<AbilityScore name='Intelligence' abilityScore={this.props.race.intelligence} handleAbility={this.handleChildChange}/>
<AbilityScore name='Wisdom' abilityScore={this.props.race.wisdom} handleAbility={this.handleChildChange}/>
<AbilityScore name='Charisma' abilityScore={this.props.race.charisma} handleAbility={this.handleChildChange}/>

<Link to='step3' className='submitButton'><button onClick={()=>this.handleSubmit()}>Submit Stats</button></Link>
</div>
</div>

            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps, {updateAbilityScore})(StepTwo);