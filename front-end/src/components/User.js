import React from 'react'
import EditUser from './EditUser'

function User({user}) {
	console.log(user);
	return (
		<div className='box'>
			{/* <div>First Name: {user.FName}</div> */}
			{/* <div>Last Name: {user.LName}</div> */}
			<div>Username: {user.Username}</div>
			{/* <div>Email: {user.Email}</div> */}
			{/* <div>Pass: {user.Pass}</div> */}
		</div>
	)
}

export default User