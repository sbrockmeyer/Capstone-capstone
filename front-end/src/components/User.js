import React from 'react'

function User({user, select}) {
	console.log(user);
	return (
		<div className='box' onClick={() => select(user)}>
			{/* <div>First Name: {user.FName}</div>
			<div>Last Name: {user.LName}</div> */}
			<div>Username: {user.Username}</div>
			{/* <div>Email: {user.Email}</div>
			<div>Pass: {user.Pass}</div> */}
		</div>
	)
}

export default User