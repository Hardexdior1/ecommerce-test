import React, { useState } from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom';


const Login = () => {
  const[password,setPassword]=useState('');
  const [userName,setUserName]=useState('');
  const [email,setEmail]=useState('');


function validateEmail(){
  if(password==''||userName==''||email==''){
    alert('please fill out the form');

  }
  else if(password!=''&&userName!=''&&email!=''&&email.length>5&&email.endsWith('@gmail.com'.toLocaleLowerCase())){
    alert('login successful but you won"t be directed to any page because this is just a front-end project')
  }
  else {
    alert('make sure you email is correct ')
  }
  

}
  return (
    <div className='carrier'>
      <h4 className='welcomeBack'>welcome back</h4>

      <div className="login-div">
        <form className='form' onSubmit={(event)=>{
          event.preventDefault();
          const userDetails={
            userName:userName,
            password:password,
            email:email,
          }
          console.log(userDetails);

        }}>
          <div>
            <label htmlFor="UserName" ></label>
            <input name='UserName' type="text"  placeholder='userName' onChange={((event)=>{
              setUserName(event.target.value);
            })}/>
          </div>

          <div>
            <label htmlFor="email" ></label>
            <input name='email' type="email"  placeholder='email' onChange={((event)=>{setEmail(event.target.value)})}/>
          </div>

          <div>
            <label htmlFor="password"></label>
            <input name='password' type="password"  placeholder='password' onChange={((event)=>{
              setPassword(event.target.value)
            })}/>
          </div>
          <button type='submit' onClick={()=>{
            validateEmail()
          }}>login</button>
        </form>


        <div>
        <small>new user ?   <Link to="/GetStarted">create an account</Link></small>

        </div>
        
        <small>forgotten password ? <Link to='/Welcome'>recover your account </Link></small>
        
      </div>

    </div>
  )
}

export default Login