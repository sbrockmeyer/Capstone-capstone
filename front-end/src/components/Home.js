import React from 'react';
import logo from '../images/Logo.png'
import { Outlet, Link } from 'react-router-dom';



function Home() {
  return (
    <>
      <div className='title'>
        <img src={logo} className='logohome'/>
        <h1>Welcome To Yarnaholic</h1>
        <h3>you need to sign in or create an account to continue its free</h3>
        <Link className='editbutton' to='/login'> Login</Link>/ or<Link className='editbutton' to='/createUser'> Create User</Link>
      </div>

    </>
  )
}

export default Home