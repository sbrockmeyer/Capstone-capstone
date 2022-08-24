import React, { useState } from 'react'
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState('');
  const [pass, setPassword] = useState('');



    return (
      <>
        <form>
          <input type='text' placeholder='username' value={username}/><br /><br />
          <input type='password'  placeholder='password' value={pass} /><br /><br />
          <button type='submit'>Login</button>
        </form>
      </>
    )
  
}

export default Login