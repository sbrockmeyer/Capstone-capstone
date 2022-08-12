import React from 'react'
import {useParams} from 'react-router-dom';

function UserDetails({ user, clear }) {
	const {userid} = useParams();
	console.log(userid)



	const delet = () => {
		
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
			{/* <button onClick={() => edit()}>edit shop</button> */}
			<a href={'/editUser/' + user._id} className='editbutton'>edit User</a>
			<button onClick={() => delet()}>delete user</button>
		</>
	)
}

export default UserDetails