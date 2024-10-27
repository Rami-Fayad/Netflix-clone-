import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login , signUp} from '../../firebase'
import netflix_spin from '../../assets/netflix_spinner.gif'
const Login = () => {
  const [signstate , setsignstate] = useState("Sign In");
  const [name ,setname]=useState("");
    const [email ,setemail]=useState("");
      const [password ,setpassword]=useState("");
      const [loaind, setloadind]= useState(false);
      const user_auth = async (event) => {
         event.preventDefault();   
         setloadind(true);
         if (signstate=== "Sign In")
          await login(email , password);
        else
        await signUp(name , email , password);
      setloadind(false);

      }

  return (
 loaind? <div className="loading">
    <img src={netflix_spin} alt="" />
 </div>:
    <div className='login'>
      <img src={logo} alt=""  className='login-logo'/>
      <div className="login-form">
        <h1>{signstate}</h1>
        <form action="">
        {signstate==="Sign Up" ? <input type='text' value={name} placeholder='your name'
        onChange={(e) =>{
          setname(e.target.value)
        }}/>
        : <></>}
        
        <input type='text' placeholder='Email'value={email}
        onChange={(e) => {
          setemail(e.target.value)
        }} />
        <input type='password' placeholder='Password' 
        value={password} onChange={(e)=>{
          setpassword(e.target.value)
        }}/>
        
        <button onClick={user_auth} type='submit'>{signstate}</button>
        <div className="help">
        <div className="remember">
          <input type="checkbox"  />
        <label htmlFor="">Remember me</label>
       
        </div>
        <p>Need help?</p>
        </div>
        <div className="switch">
          {signstate==="Sign Up" ?
          <p>Already have account?  <span onClick={()=>{
            setsignstate("Sign In")
          }}>Sign In</span></p>:
          <p>New to netflix <span onClick={()=>{
           setsignstate("Sign Up")}}>Sign up Now</span></p> }
           
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login
