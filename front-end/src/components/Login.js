import React, {useState} from 'react'

function Login() {

  const [user, setUsername] = useState('');
  const [pass, setPassword] = useState('');

  function validateForm(){
    return user.length>0 && pass.length>0;
  }
  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
      <form className='loginForm'onSubmit={handleSubmit}>
        <input type='text' value={user} placeholder='username' onChange={(e) => setUsername(e.target.value)}/><br/><br/>
        <input type='text' value={pass} placeholder='password' onChange={(e) => setPassword(e.target.value)}/><br/><br/>
        <button type='submit' disabled={!validateForm}>Login</button>
      </form>
    </>
  )
}

export default Login