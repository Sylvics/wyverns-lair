import React, {Component} from 'react';



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
               <input type='text' />
               
               </div>
             
               </div>
               <div className='buttons'>
<button>Login</button>
<button>Register</button>

               </div>
               
                </form>
            </div>
        )
    }
}
export default Login;