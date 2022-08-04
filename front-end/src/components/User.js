import React from 'react'
import EditUser from './EditUser'

function User({user}) {
	console.log(user);
	return (
		<div className='box'>
			<div>First Name: {user.FName}</div>
			<div>Last Name: {user.LName}</div>
			<div>Username: {user.Username}</div>
			<div>Email: {user.Email}</div>
			<div>Pass: {user.Pass}</div>
			{/* <button onClick={() => switchScreen("update user")}>Edit User <EditUser id={user._id}/></button> */}
		</div>
	)
}

export default User