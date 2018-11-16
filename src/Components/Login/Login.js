import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updatePlayer} from './../../ducks/reducer'



import './Login.css'
class Login extends Component{
constructor(props){
    super(props)
    this.state = {
        email:'',
        password:'',
        playerName:''
    }
}

handleEmail(e){
    this.setState({email:e.target.value})
}
handlePassword(e){
    this.setState({password:e.target.value})
}
async LoginButton(e){
    let newObj = {email: this.state.email, password: this.state.password}
   let res = await axios.post('/auth/login', newObj)
   if(res.data.status==='loggedIn'){
       console.log('Player Name', res.data.user);
       this.props.updatePlayer(res.data.user)
       this.setState({playerName:res.data.user})
    this.props.history.push('/dashboard')
   }
   else{
       
   }
   
    
}
    render(){
        return(
            <div className='loginBackground'>
                <div className='loginBox'>
               <div className='welcomeBack'>
               Welcome Back!
               </div>
               <div className='login'>
               <div className='emailText'>
               Email<br/>
               <input type='text' onChange={(e)=> this.handleEmail(e)} />
               
               </div>
               <div className='emailText'>
               Password<br/>
               <input type='password' onChange={(e)=> this.handlePassword(e)} />
               
               </div>
             
               </div>
               <div className='buttons'>
<button onClick={()=>this.LoginButton()}>Login</button>
<Link to='/welcome'><button >New User?</button></Link>


               </div>
               
                </div>
            </div>
        )
    }
    
}

export default connect(null, {updatePlayer})(Login);