import React, { useState } from 'react'
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState('');
  const [pass, setPassword] = useState('');



  return (
    <>
      <div className='formbox'>
        <form className='formyform'>
          <lable>Username:</lable><br />
          <input type='text' placeholder='username' value={username} /><br /><br />
          <label>Password:</label><br />
          <input type='password' placeholder='password' value={pass} /><br /><br />
          <button type='submit'>Login</button>
        </form>

      </div>
    </>
  )

}

export default Login