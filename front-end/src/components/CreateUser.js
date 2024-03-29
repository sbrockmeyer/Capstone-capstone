import React, { useState } from 'react';
import profile from '../images/profilepicunknown.png';
import { Outlet, Link } from 'react-router-dom';


function CreateUser() {
  const [pass, setPassword] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pic, setProfilePic] = useState(profile);
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(`http://localhost:4000/createUser`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          pass: pass,
          fName: firstName,
          lName: lastName,
          email: email,
          username: username,
          pic: pic
        }),
      });

      if (res.status === 200) {
        setPassword("");
        setEmail("");
        setFName("");
        setLName("");
        setUsername("");
        setProfilePic("");
        setMessage("user created");
      } else {
        setMessage("not created");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='formbox'>
        <form onSubmit={handleSubmit} className='formyform'>
          <label>First Name:</label><br/>
          <input type="text" value={firstName} placeholder="first name" onChange={(e) => setFName(e.target.value)}/><br/><br/>
          <label>Last Name</label><br/>
          <input type="text" value={lastName} placeholder="last name" onChange={(e) => setLName(e.target.value)}/><br/><br/>
          <label>Username:</label><br/>
          <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/><br/><br/>
          <label>Email:</label><br/>
          <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/><br/><br/>
          <label>Password</label><br/>
          <input type="text" value={pass} placeholder="password" onChange={(e) => setPassword(e.target.value)}/><br/><br/>
          <label>Profile Picture:</label><br/>
          <input type="text" value={pic} placeholder="Profile pic" onChange={(e) => setProfilePic(e.target.value)}/><br/><br/>

          <button type='submit'>create user</button>
          <Link className='editbutton' to='/login'> Login</Link>
          <div>{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </>
  )
}

export default CreateUser