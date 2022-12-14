import React from 'react'
import '../styles/Welcome.css'
import gift from '../Images/Rectangle 26.png'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <div>
      <div className='welcome-div'>
        <h5>You're Almost In!</h5>
        <h3>Welcome Hardexdior</h3>
        <span><img className='gift-img' src={gift} alt="" /></span>
        <p>An activation link has been sent to your <Link>G-mail</Link> Please click on the link to verify your email and activate your TradExpress account.</p>

        <Link className='wel-link' to='/GetStarted'>Sign Up</Link> <br /> <br />

        <span>Already have an account ?</span> <Link className='here-link' to='/login'>Click here</Link>










      </div>










    </div>
  )
}

export default Welcome