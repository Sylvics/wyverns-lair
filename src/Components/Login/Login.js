import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import axios from 'axios';



import './Login.css'
class Login extends Component{
constructor(props){
    super(props)
    this.state = {
        email:'',
        password:''
    }
}
handleEmail(e){
    this.setState({email:e.target.value})
}
handlePassword(e){
    this.setState({password:e.target.value})
}
async LoginButton(e){
    let newObj = {...this.state}
   let res = await axios.post('/auth/login', newObj)
   console.log(res);
   this.props.history.push('/dashboard')
    
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
export default Login;