import React, { useState } from 'react'

// var eng = req.body.English;
// var uk = req.body.UK;
// var ger = req.body.German;
// var swe = req.body.Swedish;
// var span = req.body.Spanish;
// var ital = req.body.Italian;
// var fren = req.body.French;
// var pol = req.body.Polish;
// var def = req.body.Definition

function CreateWord() {

	const [eng, setEnglish] = useState("");
	const [uk, setUK] = useState("");
	const [ger, setGerman] = useState("");
	const [swe, setSwedish] = useState("");
	const [span, setSpanish] = useState("");
	const [ital, setIalian] = useState("");
	const [fren, setFrench] = useState("");
	const [pol, setPolish] = useState("");
	const [def, setDefinition] = useState("");
	const [message, setMessage] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();

		try {

			let res = await fetch(`http://localhost:4000/addWord`, {
				method: "POST",
				headers: {
					'Content-Type': "application/json",
				},
				body: JSON.stringify({
					English: eng,
					UK: uk,
					German: ger,
					Swedish: swe,
					Spanish: span,
					Italian: ital,
					French: fren,
					Polish: pol,
					Definition: def,
				}),
			});

			if (res.status === 200) {
				setEnglish("");
				setUK("");
				setGerman("");
				setSwedish("");
				setSpanish("");
				setIalian("");
				setFrench("");
				setPolish("");
				setDefinition("");
				setMessage("word successfully has been made");
			} else {
				setMessage("Your word didnt get made");
			}

		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<input type="text" value={eng} placeholder="English" onChange={(e) => setEnglish(e.target.value)}/><br/><br/>
					<input type="text" value={uk} placeholder="UK/Australia" onChange={(e) => setUK(e.target.value)}/><br/><br/>
					<input type="text" value={ger} placeholder="German" onChange={(e) => setGerman(e.target.value)}/><br/><br/>
					<input type="text" value={swe} placeholder="Swedish" onChange={(e) => setSwedish(e.target.value)}/><br/><br/>
					<input type="text" value={span} placeholder="Spanish" onChange={(e) => setSpanish(e.target.value)}/><br/><br/>
					<input type="text" value={ital} placeholder="Italian" onChange={(e) => setIalian(e.target.value)}/><br/><br/>
					<input type="text" value={fren} placeholder="French" onChange={(e) => setFrench(e.target.value)}/><br/><br/>
					<input type="text" value={pol} placeholder="Polish" onChange={(e) => setPolish(e.target.value)}/><br/><br/>
					<input type="text" value={def} placeholder="Definition" onChange={(e) => setDefinition(e.target.value)}/><br/><br/>

					<button type='submit'>Create Word</button>
					
					<div>{message ? <p>{message}</p> : null}</div>
				</form>
			</div>
		</>
	)
}

export default CreateWord