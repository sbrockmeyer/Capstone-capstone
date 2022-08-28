import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentails){
  return fetch('http://localhost:4000/login',{
    method: 'POST',
    headers: {
      'Conntent-Type' : 'application.json'
    },
    body: JSON.stringify(credentails)
  })
  .then(data => data.json())
}

function Login({setToken}) {

  const [username, setUsername] = useState('');
  const [pass, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefalut();
    const token = await loginUser({
      username,
      pass
    });
    setToken(token);
  }

  return (
    <>
      <div className='formbox'>
        <form className='formyform' onSubmit={handleSubmit}>
          <label>Username:</label><br />
          <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br /><br />
          <label>Password:</label><br />
          <input type='password' placeholder='password' value={pass} onChange={(e) => setPassword(e.target.value)}/><br /><br />
          <button type='submit'>Login</button>
        </form>


      </div>
    </>
  )

}

Login.propTypes ={
  setToken: PropTypes.func.isRequired
};
export default Login