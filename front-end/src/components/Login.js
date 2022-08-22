import React, { useState } from 'react'

function Login() {

  const [user, setUser] = useState({
    username:"",
    pass:""
  });

  const handleChange = (e) =>{
    const {user, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

    return (
      <>
        <form>
          <input type='text' value={user.username} placeholder='username' onChange={handleChange} /><br /><br />
          <input type='password' value={user.pass} placeholder='password' onChange={handleChange} /><br /><br />
          <button type='submit'>Login</button>
        </form>
      </>
    )
  
}

export default Login