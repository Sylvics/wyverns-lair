import React, {Component} from 'react';
import './Dashboard.css'
import {Parallax, Background} from 'react-parallax';
import Card from './../Card/Card';


class Dashboard extends Component {
    render(){
        return(
            <div >
                <div className='pre-dragon'>
                <Card></Card>
                </div>
<Parallax
    blur={0}
    bgImage={require('./DragonParallax.jpg')}
    bgImageAlt='The Dragons hoard'
    strength={500}>
    <div className='Dragonsize'></div>
    </Parallax>
            <div className='post-dragon'>

            </div>


            </div>
        )
    }
}
export default Dashboard;