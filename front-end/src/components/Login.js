import React from 'react'

function Login() {

  return (
    <>
      <form className='loginForm'>
        <input type='text' placeholder='username'/><br/><br/>
        <input type='text' placeholder='password'/><br/><br/>
        <button type='submit' >Login</button>
      </form>
    </>
  )
}

export default Login