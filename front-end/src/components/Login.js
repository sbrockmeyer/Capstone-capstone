import React, { useState } from 'react'

async function Login() {

  const [user, setUsername] = useState('');
  const [pass, setPassword] = useState('');

  const data = await response.json();
  if (data.status === 'yee') {
    const userObject = {
      id: data.userId,
      username: data.username
    }
    window.localStorage.setItem("User", JSON.stringify(userObject));

    alert('login successful');
    window.location.replace("");
  } else {
    alert('please try again')
  }
  let use = window.localStorage.getItem("User");
  let userInfo = JSON.parse(use);

  const logout = () => {
    let use = window.localStorage.getItem("User");
    window.localStorage.clear();
    window.location.replace("");
    console.log(use)
  }
  if (user == null) {
    return (
      <>
        <form className='loginForm'>
          <input type='text' value={user} placeholder='username' onChange={(e) => setUsername(e.target.value)} /><br /><br />
          <input type='text' value={pass} placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br /><br />
          <button type='submit' value='Login'>Login</button>
        </form>
      </>
    )
  }else{
    return(
      <>
        <button onClick={() => logout()}>logout</button>
      </>
    )
  }
}

export default Login