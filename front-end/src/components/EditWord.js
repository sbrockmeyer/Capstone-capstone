import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EditWord() {
	const { wordid } = useParams();
	console.log(wordid);

	const [eng, setEnglish] = useState("");
	const [uk, setUK] = useState("");
	const [ger, setGerman] = useState("");
	const [swe, setSwedish] = useState("");
	const [span, setSpanish] = useState("");
	const [ital, setItalian] = useState("");
	const [fren, setFrench] = useState("");
	const [pol, setPolish] = useState("");
	const [def, setDefinition] = useState("");
	const [message, setMessage] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();

		try {

			let res = await fetch(`http://localhost:4000/updateWord`, {
				method: "POST",
				headers:{
					'Content-Type': "application/json",
				},
				body:JSON.stringify({
					wordId: wordid,
					English: eng,
					UK: uk,
					German: ger,
					Swedish: swe,
					Spanish: span,
					Italian: ital,
					French: fren,
					Polish: pol,
					Definitin: def,
				}),
			});

			if (res.status === 200){
				setEnglish("");
				setUK("");
				setGerman("");
				setSwedish("");
				setSpanish("");
				setItalian("");
				setFrench("");
				setPolish("");
				setDefinition("");
				setMessage("your word has been update");
			}else{
				setMessage("you word didnt get updated");
			}

		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<div>
				<form>
					<div>Word id: {wordid}</div>
					<input type='text' value={eng} placeholder="English" onChange={(e) => setEnglish(e.target.value)}/><br /><br />
					<input type='text' value={uk} placeholder="UK/Australia" onChange={(e) => setUK(e.target.value)}/><br /><br />
					<input type='text' value={ger} placeholder="German" onChange={(e) => setGerman(e.target.value)}/><br /><br />
					<input type='text' value={swe} placeholder="Swedish" onChange={(e) => setSwedish(e.target.value)}/><br /><br />
					<input type='text' value={span} placeholder="Spanish" onChange={(e) => setSpanish(e.target.value)}/><br /><br />
					<input type='text' value={ital} placeholder="Italian" onChange={(e) => setItalian(e.target.value)}/><br /><br />
					<input type='text' value={fren} placeholder="French" onChange={(e) => setFrench(e.target.value)}/><br /><br />
					<input type='text' value={pol} placeholder="Polish" onChange={(e) => setPolish(e.target.value)}/><br /><br />
					<input type='text' value={def} placeholder="Definition" onChange={(e) => setDefinition(e.target.value)}/><br /><br />
					{/* <input type='text' value={} placeholder="" onChange={(e) => (e.target.value)}/><br /><br /> */}
					<button type='submit'>Edit</button>
					<div>{message ? <p>{message}</p> : null}</div>
				</form>
			</div>
		</>
	)
}

export default EditWord