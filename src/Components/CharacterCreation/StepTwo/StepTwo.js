import React, {Component} from 'react';
import SubNav from './../SubNav/SubNav';
import './StepTwo.css'
import {connect} from 'react-redux'
import AbilityScore from './AbilityScore.js';

import {Link} from 'react-router-dom'

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
<div className='direction'>
<h1>Please select your ability scores.</h1>
<h2>Roll the dice, drop the lowest number, and add it to your ability score.</h2>
</div>
<div className='Abilities'>
<AbilityScore abilityName='Strength' abilityScore={this.props.race.strength}/>
<AbilityScore abilityName='Dexterity' abilityScore={this.props.race.dexterity}/>
<AbilityScore abilityName='Constitution' abilityScore={this.props.race.constitution}/>
<AbilityScore abilityName='Intelligence' abilityScore={this.props.race.intelligence}/>
<AbilityScore abilityName='Wisdom' abilityScore={this.props.race.wisdom}/>
<AbilityScore abilityName='Charisma' abilityScore={this.props.race.charisma}/>

<Link to='step3' className='submitButton'><button onClick=''>Submit Stats</button></Link>
</div>
</div>

            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(StepTwo);