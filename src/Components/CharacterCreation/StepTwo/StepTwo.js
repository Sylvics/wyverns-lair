import React, {Component} from 'react';
import SubNav from './../SubNav/SubNav';
import './StepTwo.css'
import {connect} from 'react-redux'
import AbilityScore from './AbilityScore.js';

class StepTwo extends Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }
 
    render(){
      
        return(
            <div>
<SubNav/>

<div className='abScoreEntryList'>
<h1>Now, please select ability scores</h1>
<h2>Please roll the dice, drop the lowest number, add them up, and then input that number here</h2>
<AbilityScore abilityName='Strength' abilityScore={this.props.race.strength}/>
<AbilityScore abilityName='Dexterity' abilityScore={this.props.race.dexterity}/>
<AbilityScore abilityName='Constitution' abilityScore={this.props.race.constitution}/>
<AbilityScore abilityName='Intelligence' abilityScore={this.props.race.intelligence}/>
<AbilityScore abilityName='Wisdom' abilityScore={this.props.race.wisdom}/>
<AbilityScore abilityName='Charisma' abilityScore={this.props.race.charisma}/>
</div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(StepTwo);