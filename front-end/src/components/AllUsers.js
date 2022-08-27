import React, { useState, useEffect } from 'react'
import User from './User';
import UserDetails from './UserDetails';

function AllUsers() {
	const [users, setAllUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState('');

	const selectUser = (user) => {
		setSelectedUser(user);
		console.log(user);
		console.log(selectedUser);
	}

	const clearUser = () => {
		setSelectedUser('');
	}

	const getUserData = () => {
		var urlUser = `http://localhost:4000/allUsers`;

		fetch(urlUser)
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				setAllUsers(data);
			}).catch(e => console.log(e));
	}

	useEffect(() => {
		getUserData();
	}, []);


	return (
		<>
			<div className='containerbox'>
				{
					selectedUser ?
						<UserDetails user={selectedUser} clear={clearUser} /> :
						users?.map((allUsers) => (
							<div key={allUsers._id}>
								{
									<User user={allUsers} select={selectUser}/>
								}
							</div>
						))}
			</div>
		</>
	)
}

export default AllUsers