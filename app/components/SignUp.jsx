import React from 'react'

const SignUp = () => {


  return (
  <div  className='w-full max-w-xs'>
   <form  data-theme='cupcake' className=' shadow-lg rounded-xl '  action="">
    <div>
    <input className='bg-white shadow-lg rounded-xl px-4 py-4 mt-6 mb-6 mx-5 input input-bordered input-primary' type="text" placeholder='Name' />
    </div>
    <div>
    <input className='bg-white shadow-lg rounded-xl px-4 py-4 mt-6 mb-6 mx-5 input input-bordered input-primary' type="phone" placeholder='Phone Number' />
    </div>
    <div>
    <input className='bg-white shadow-lg rounded-xl px-4 py-4 mt-6 mb-6 mx-5 input input-bordered input-primary' type="email" placeholder='Email'/>
    </div>
    <div>
    <input className='bg-white shadow-lg rounded-xl px-4 py-4 mt-6 mb-6 mx-5 input input-bordered input-primary' type="password" placeholder='Password'/>
    </div>
    <div>
    <input className='bg-white shadow-lg rounded-xl px-4 py-4 mt-6 mb-6 mx-5 input input-bordered input-primary' type="password" placeholder='Confirm Password' />
    </div>
    <div>
    <button data-theme='aqua'   className='shadow-lg rounded-xl px-4 py-4 mt-6 mb-6 mx-20 hover:bg-transparent hover:text-black' type='submit'>Sign Up</button>
    </div>
    <div>
    <button className="btn btn-link ml-16 hover:text-black">Sign In Here</button>
    </div>
   </form>
  </div>  
)
}

export default SignUp