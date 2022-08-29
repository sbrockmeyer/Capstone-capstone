import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';


// async function loginUser(credentails){
//   return fetch('http://localhost:4000/login',{
//     method: 'POST',
//     headers: {
//       'Conntent-Type' : 'application.json'
//     },
//     body: JSON.stringify(credentails)
//   })
//   .then(data => data.json())
// }

function Login({setToken}) {

  const [username, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  const [message, setMessage] = useState('');

  let navigate = useNavigate();
  const routeChange = () =>{
    let path ='/'
    navigate(path)
  }

  const handleSubmit = (e ) =>{
    e.preventDefault();
    console.log('logged in');
    setMessage('logged in');
    
  }

  return (
    <>
      <div className='formbox'>
        <form className='formyform' onSubmit={handleSubmit} >
          <label>Username:</label><br />
          <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br /><br />
          <label>Password:</label><br />
          <input type='password' placeholder='password' value={pass} onChange={(e) => setPassword(e.target.value)}/><br /><br />
          <div>{message ? <p>{message}</p> : null}</div>
          <button type='submit' onClick={routeChange}>Login</button><br/>
          dont have an account?
          <Link className='editbutton' to='/createUser'> Create User</Link>
        </form>


      </div>
    </>
  )

}
export default Login