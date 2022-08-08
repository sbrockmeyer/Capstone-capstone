import React from 'react'

function UserDetails({ user, clear }) {

	const edit = () => {
		console.log(`Edit ${user._id}`);
	}

	const delet = () => {
		console.log(`Delete ${user._id}`);
	}


	return (
		<>
			<div className='boxdetails' onClick={() => clear()}>
				<div>First Name: {user.FName}</div>
				<div>Last Name: {user.LName}</div>
				<div>Username: {user.Username}</div>
				<div>Email: {user.Email}</div>
				<div>Pass: {user.Pass}</div>
			</div>
			<button onClick={() => edit()}>edit shop</button>
			<button onClick={() => delet()}>delete shop</button>
		</>
	)
}

export default UserDetails