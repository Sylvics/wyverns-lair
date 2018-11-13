import React, {Component} from 'react';
import  {Link} from 'react-router-dom';



import './Login.css'
class Login extends Component{

    render(){
        return(
            <div className='loginBackground'>
                <form className='loginBox'>
               <div className='welcomeBack'>
               Welcome Back!
               </div>
               <div className='login'>
               <div className='emailText'>
               Email<br/>
               <input type='text' />
               
               </div>
               <div className='emailText'>
               Password<br/>
               <input type='password' />
               
               </div>
             
               </div>
               <div className='buttons'>
<button>Login</button>
<Link to='/welcome'><button >New User?</button></Link>


               </div>
               
                </form>
            </div>
        )
    }
}
export default Login;