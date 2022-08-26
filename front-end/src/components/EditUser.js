import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

function EditUser() {
  const {userid} = useParams();
  console.log(userid);

  const [pass, setPassword] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      let res = await fetch(`http://localhost:4000/updateUser`,{
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body:JSON.stringify({
          id: userid,
          pass: pass,
          fName: firstName,
          lName: lastName,
          email: email,
          username: username
        }),
      });

      if(res.status === 200) {
        setPassword("")
        setFName("");
        setLName("");
        setEmail("");
        setUsername("");
        setMessage("user updated");
      }else{
        setMessage("user not updated");
      }

    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      <div className='formbox'>
        <form onSubmit={handleSubmit} className='formyform'>
          {/* <div>User ID: {userid}</div> */}
          <label>First Name:</label><br/>
          <input type='text' value={firstName} placeholder="First Name" onChange={(e) => setFName(e.target.value)}/><br/><br/>
          <label>Last Name:</label><br/>
          <input type='text' value={lastName} placeholder="Last Name" onChange={(e) => setLName(e.target.value)}/><br/><br/>
          <label>Username</label><br/>
          <input type='text' value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/><br/><br/>
          <label>Email:</label><br/>
          <input type='text' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/><br/>
          <label>Password:</label><br/>
          <input type='text' value={pass} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br/><br/>
          <button type='submit'>Edit</button>
          <div>{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </>
  )
}

export default EditUser