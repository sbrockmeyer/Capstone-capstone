import React from 'react'
import EditUser from './EditUser'

function User({users}) {
	console.log(users);
	return (
		<div>
			<div>First Name: {users.FName}</div>
			<div>Last Name: {users.LName}</div>
			<div>Username: {users.Username}</div>
			<div>Email: {users.Email}</div>
			<button>Edit User <EditUser id={users._id}/></button>
		</div>
	)
}

export default User