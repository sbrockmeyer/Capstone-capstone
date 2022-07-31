import React, { useState, useEffect } from 'react'
import User from './User';

function AllUsers({ switchScreen }) {
	const [users, setAllUsers] = useState([]);

	const getUserData = () => {
		var urlUser = `http://localhost:4000/allUsers`;

		fetch(urlUser)
		.then(resp => resp.json())
		.then(data =>{
			console.log(data);
			setAllUsers(data);
		}).catch(e => console.log(e));
	}

	useEffect(() => {
		getUserData();
	}, []);


	return (
		<>
			<div>
				{users?.map((allUsers) => (
					<div key={allUsers._id}>
						<User user={allUsers} switchScreen={switchScreen}/>
					</div>
				))}
			</div>
		</>
	)
}

export default AllUsers