import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Card.css'
import smallDragon from './SmallDragon.jpg';
function Card(props){
return(
    <div className='Card'>
    <Link to='/step1'><img className='CardPicture' src={smallDragon} alt=''/></Link>
    

    <div    className='charName'>
    Add A Character
    </div>
    <div className='charActionbar'>

    </div>
    </div>
)
}
export default Card;
