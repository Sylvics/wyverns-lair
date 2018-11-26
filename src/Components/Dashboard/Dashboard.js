import React, {Component} from 'react';
import './Dashboard.css'
import {Parallax} from 'react-parallax';
import Card from './../Card/Card';
import {connect} from 'react-redux';

class Dashboard extends Component {
    componentDidMount(){
        console.log('onMount', this.props)
        if(!this.props.playerName){
            this.props.history.push('/')
        }
    }
    
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
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps)(Dashboard);