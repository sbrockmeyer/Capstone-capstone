import React, { useState } from 'react';
import shopimg from '../images/shop.png'


function CreateShop() {
	const [shopName, setNameShop] = useState('');
	const [description, setDescription] = useState('');
	const [lang, setLanguage] = useState('');
	const [country, setCountry] = useState('');
	const [currency, setCurrency] = useState('');
	const [message, setMessage] = useState('');
	const [pic, setProfilePic] = useState(shopimg);

	let handleSubmit = async (e) => {
		e.preventDefault();
		try {

			let res = await fetch(`http://localhost:4000/createShop`, {
				method: "POST",
				headers: {
					'Content-Type': "application/json",
				},
				body: JSON.stringify({
					shopName: shopName,
					description: description,
					language: lang,
					country: country,
					currency: currency,
					pic: pic
				}),
			});

			if (res.status === 200) {
				setNameShop("");
				setDescription("");
				setLanguage("");
				setCountry("");
				setCurrency("");
				setProfilePic("");
				setMessage("Success shop has been made");
			} else {
				setMessage("something borked");
			}
		} catch (err) {
			console.log(err)
		}
	};

	return (
		<>
			<div className='formbox'>
				<form onSubmit={handleSubmit} className='formyform'>
					<label>Shop Name:</label><br />
					<input type='text' value={shopName} placeholder="Shop Name" onChange={(e) => setNameShop(e.target.value)} /><br /><br />
					<label>Description:</label><br />
					<input type='text' value={description} placeholder="shop description" onChange={(e) => setDescription(e.target.value)} /><br /><br />
					<label>Language:</label><br />
					<input type='text' value={lang} placeholder="language" onChange={(e) => setLanguage(e.target.value)} /><br /><br />
					<label>Country</label><br />
					<input type="text" value={country} placeholder="country" onChange={(e) => setCountry(e.target.value)} /><br /><br />
					<label>Currency</label><br />
					<input type="text" value={currency} placeholder="currency" onChange={(e) => setCurrency(e.target.value)} /><br /><br />
					<label>Shop Picture:</label><br />
					<input type="text" value={pic} placeholder="Profile pic" onChange={(e) => setProfilePic(e.target.value)} /><br /><br />

					<button type='submit'>Create Shop</button>

					<div>{message ? <p>{message} </p> : null}</div>
				</form>
			</div>
		</>
	)
}

export default CreateShop