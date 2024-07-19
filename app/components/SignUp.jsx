import React from 'react'

const SignUp = () => {


  return (
  <div className='w-full max-w-xs'>
   <form className='bg-white shadow-lg rounded-xl '  action="">
    <div>
    <input className='bg-white shadow-lg rounded-xl px-4 py-4 mt-10 mb-10 ' type="text" placeholder='Name' />
    </div>
    <div>
    <input type="phone" placeholder='Phone Number' />
    </div>
    <div>
    <input type="email" placeholder='Email'/>
    </div>
    <div>
    <input type="password" placeholder='Password'/>
    </div>
    <div>
    <input type="password" placeholder='Confirm Password' />
    </div>
    <div>
    <button type='submit'>Sign Up</button>
    </div>

   </form>
  </div>  
)
}

export default SignUp