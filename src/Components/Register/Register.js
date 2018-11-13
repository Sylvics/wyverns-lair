import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



import './Register.css'
class Register extends Component{
    constructor(props){
        super()
        this.state={
            email:'',
            playerID:'',
            password:'',
            confirmPass:'',
            phoneNumber: null,
            result:'',

        }
    }

    handleEmail(e){
        this.setState({email: e.target.value})
        
    }
    handlePlayerID(e){
        this.setState({playerID: e.target.value})
        
    }
    handlePassword(e){
        this.setState({password: e.target.value})
        
    }
    handleConfirmPass(e){
        this.setState({confirmPass: e.target.value})
        
    }
    handlePhoneNumber(e){
        this.setState({phoneNumber: e.target.value})
        
    }
    async submitRegistration(){
        let register = {...this.state}
        let res = await axios.post('/auth/register', register)
        this.setState({result:res})

    }
    render(){
        return(
            <div className='registerBackground'>
                <form className='registerBox'>
                {/* {this.state.result.data?<div>{this.state.result.data}</div>:<div></div>} */}
               <div className='welcomeBack'>
               Welcome to the Roost
               </div>
               <div className='register'>
               <div>
               Email<br/>
               <input type='text' onChange={(e)=>this.handleEmail(e)}/>
               
               </div>
               <div>
               PlayerID<br/>
               <input type='text' onChange={(e)=>this.handlePlayerID(e)} />
               <h6>Hint: This is your unique username!</h6>
               </div>
               
               <div>
               Password<br/>
               <input type='password' onChange={(e)=>this.handlePassword(e)}/>
               
               
               </div>
               <div>
                Confirm Your Password<br/>
               <input type='password' onChange={(e)=>this.handleConfirmPass(e)}/>
               
               
               </div>
               <div>
                Mobile Phone Number<br/>
               <input type='text' onChange={(e)=>this.handlePhoneNumber(e)}/>
               
               
               </div>
             
               </div>
               <div className='buttons'>
               <Link to='/'> <button className = 'registrate'>Back</button></Link>
              <button className='registrate' onClick={()=>this.submitRegistration()}>Register</button>


               </div>
               
                </form>
            </div>
        )
    }
}
export default Register;