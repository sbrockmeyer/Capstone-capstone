import React, { useState } from 'react'

function CreateShop() {
	const [shopName, setNameShop] = useState('');
	const [description, setDescription] = useState('');
	const [lang, setLanguage] = useState('');
	const [country, setCountry] = useState('');
	const [currency, setCurrency] = useState('');
	const [message, setMessage] = useState('');

	let handleSubmit = async (e) => {
		e.preventDefault();
		try {

			let res = await fetch(``, {
				method: "POST",
				body: JSON.stringify({
					shopname: shopName,
					description: description,
					lang: lang,
					country: country,
					currency: currency,
				}),
			});

			let resJson = await res.json();

			if (res.status === 200) {
				setNameShop("");
				setDescription("");
				setLanguage("");
				setCountry("");
				setCurrency("");
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
			<div>
				<form onSubmit={handleSubmit}>
					<input type='text' value={shopName} placeholder="Shop Name" onChange={(e) => setShopName(e.target.value)} />
					<input type='text' value={description} placeholder="shop description" onChange={(e) => setDescription(e.target.value)}/>
					<input type='text' value={lang} placeholder="language" onChange={(e)=>setLanguage(e.target.value)}/>
				</form>
			</div>
		</>
	)
}

export default CreateShop