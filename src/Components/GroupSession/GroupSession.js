import socket from 'socket.io-client'
import React, {Component} from 'react';

// const io = socket.connect('http://localhost:4000')
class GroupSession extends Component{
constructor(props){
    super()
    this.state = {
        room: '',
        roomI: ''
    }
}
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default GroupSession;