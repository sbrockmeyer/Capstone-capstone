import React from 'react'
import { useParams } from 'react-router-dom';
import profile from '../images/profilepicunknown.png';

function UserDetails({ user, clear }) {
	const { userid } = useParams();
	console.log(userid)

	return (
		<>
			<div className='details'>
				<div className='boxdetails' onClick={() => clear()}>
					<img src={user.Pic} alt="profile pic" /> 
					<div className='detaildetail'>
						<div>First Name: {user.FName}</div>
						{/* <div>Last Name: {user.LName}</div> */}
						<div>Username: {user.Username}</div>
						<div>Email: {user.Email}</div>
						{/* <div>Pass: {user.Pass}</div> */}
					</div>
				</div>
				{/* <button onClick={() => edit()}>edit shop</button> */}
				<a href={'/editUser/' + user._id} className='editbutton'>edit User</a>
				{/* <button onClick={() => delet()}>delete user</button> */}
			</div>
		</>
	)
}

export default UserDetails