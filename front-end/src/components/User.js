import React from 'react'
import profile from '../images/profilepicunknown.png';


function User({ user, select }) {
	console.log(user);
	return (
		<div className='box' onClick={() => select(user)}>
			{user.Pic != 'N/A' ?
				<img src={user.Pic} alt="profile pic" /> :
				<img src={profile} width='80' alt='profile' className='profile' />
			}
			{/* <div>First Name: {user.FName}</div>
			<div>Last Name: {user.LName}</div> */}
			<div>Username: {user.Username}</div>
			{/* <div>Email: {user.Email}</div>
			<div>Pass: {user.Pass}</div> */}
		</div>
	)
}

export default User